import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { getOr404 } from './ads.utils';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad } from './entities/ad.entity';
import { Image } from './entities/image.entity';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(Ad)
    private adRepository: Repository<Ad>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createAdDto: CreateAdDto, userId: string) {
    const vehicle = {
      ...createAdDto.vehicle,
      images: createAdDto.vehicle.images?.map((url: string) => ({ url })),
    };

    const newAd = this.adRepository.create({
      ...createAdDto,
      vehicle,
      user: {
        id: userId,
      },
    });

    const returnAd = await this.adRepository.save(newAd);

    return returnAd;
  }

  async findAll() {
    const ads = await this.adRepository.find({
      select: {
        user: {
          id: true,
          name: true,
        },
      },
      relations: {
        user: true,
        vehicle: {
          images: true,
        },
      },
    });

    return ads;
  }

  async findOne(where: FindOptionsWhere<Ad>) {
    const ad = await this.adRepository.findOne({
      where,
      select: {
        user: {
          name: true,
          description: true,
        },
      },
      relations: {
        user: true,
        vehicle: {
          images: true,
        },
      },
    });

    if (!ad) {
      throw new NotFoundException();
    }

    return ad;
  }

  async update(id: string, updateAdDto: UpdateAdDto) {
    const ad = await this.findOne({ id });

    if (updateAdDto?.vehicle) {
      const { vehicle } = updateAdDto;
      const images =
        vehicle.images?.map((url) => this.imageRepository.create({ url })) ??
        ad.vehicle.images;

      ad.vehicle = this.vehicleRepository.create({
        ...ad.vehicle,
        ...vehicle,
        images,
      });
    }

    const newAd = { ...ad, ...updateAdDto, vehicle: ad.vehicle };

    await this.adRepository.save(newAd, { reload: true });

    const updatedAd = await this.adRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        vehicle: {
          images: true,
        },
        user: true,
      },
      select: {
        user: {
          id: true,
          name: true,
        },
      },
    });

    return updatedAd;
  }

  async remove(id: string) {
    const ad: Ad = await getOr404(this.adRepository, id, ['vehicle']);
    const vehicle: Vehicle = await getOr404(
      this.vehicleRepository,
      ad.vehicle.id,
      ['images'],
    );

    vehicle.images.forEach(
      async (image) => await this.imageRepository.delete({ id: image.id }),
    );

    await this.vehicleRepository.delete({ id: ad.vehicle.id });
    await this.adRepository.delete({ id: ad.id });
  }
}
