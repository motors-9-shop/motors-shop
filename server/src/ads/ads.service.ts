import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad } from './entities/ad.entity';
import { Image } from './entities/image.entity';
import { Vehicle } from './entities/vehicle.entity';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { getOr404 } from './ads.utils';

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

  async create(createAdDto: CreateAdDto) {
    const newVehicle = this.vehicleRepository.create({
      name: createAdDto.vehicle.name,
      type: createAdDto.vehicle.type,
      year: createAdDto.vehicle.year,
      images: [],
      km: createAdDto.vehicle.km,
      bannerUrl: createAdDto.vehicle.bannerUrl,
    });

    createAdDto.vehicle.images.forEach(async (elem) => {
      const image = this.imageRepository.create({
        url: elem,
      });

      const savedImage = await this.imageRepository.save(image);

      newVehicle.images.push(savedImage);
    });

    await this.vehicleRepository.save(newVehicle);

    const newAd = this.adRepository.create({
      description: createAdDto.description,
      price: createAdDto.price,
      type: createAdDto.type,
      user: {},
      vehicle: newVehicle,
    });

    const returnAd = await this.adRepository.save(newAd);

    return returnAd;
  }

  async findAll() {
    const ads = await this.adRepository.find({
      select: {
        user: {
          name: true,
        },
      },
    });

    return ads;
  }

  async findOne(id: string) {
    const ad = await getOr404(this.adRepository, id, ['vehicle', 'user']);

    return ad;
  }

  async update(id: string, updateAdDto: UpdateAdDto) {
    const ad: Ad = await getOr404(this.adRepository, id, ['vehicle']);
    const vehicle: Vehicle = await getOr404(
      this.vehicleRepository,
      ad.vehicle.id,
    );
  }

  async remove(id: string) {
    try {
      const ad = await this.adRepository.findOneBy({ id });

      if (!ad) {
        throw new NotFoundException();
      }
      return ad;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
