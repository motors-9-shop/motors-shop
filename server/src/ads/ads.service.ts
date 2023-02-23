import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad } from './entities/ad.entity';
import { Image } from './entities/image.entity';
import { Vehicle } from './entities/vehicle.entity';
import { NotFoundException } from '@nestjs/common';
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

  async create(createAdDto: CreateAdDto, userID: string) {
    const newVehicle = this.vehicleRepository.create({
      name: createAdDto.vehicle.name,
      type: createAdDto.vehicle.type,
      year: createAdDto.vehicle.year,
      images: [],
      km: createAdDto.vehicle.km,
      bannerUrl: createAdDto.vehicle.bannerUrl,
    });

    createAdDto.vehicle.images.forEach(async (elem) => {
      const image = new Image();

      image.url = elem;

      newVehicle.images.push(image);
    });

    const newAd = this.adRepository.create({
      description: createAdDto.description,
      price: createAdDto.price,
      type: createAdDto.type,
      user: {
        id: userID,
      },
      vehicle: newVehicle,
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

  async findOne(id: string) {
    const ad = await this.adRepository.findOne({
      where: {
        id,
      },
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
    const UpdateVehDto = updateAdDto.vehicle;

    const ad = await this.adRepository.findOne({
      where: {
        id,
      },
      relations: {
        vehicle: {
          images: true,
        },
      },
    });

    if (!ad) {
      throw new NotFoundException();
    }

    await this.adRepository.update(
      { id: id },
      {
        // eslint-disable-next-line prettier/prettier
        description: updateAdDto.description ? updateAdDto.description : ad.description,
        price: updateAdDto.price ? updateAdDto.price : ad.price,
        type: updateAdDto.type ? updateAdDto.type : ad.type,
        isActive: updateAdDto.isActive ? updateAdDto.isActive : ad.isActive,
      },
    );

    const images = UpdateVehDto.images?.map((image_url) => {
      const image = new Image();

      image.url = image_url;

      return image;
    });

    const vehicle = await this.vehicleRepository.findOne({
      where: {
        id: ad.vehicle.id,
      },
      relations: {
        images: true,
      },
    });

    vehicle.bannerUrl = UpdateVehDto.bannerUrl
      ? UpdateVehDto.bannerUrl
      : vehicle.bannerUrl;
    vehicle.images = images ? images : vehicle.images;
    vehicle.km = UpdateVehDto.km ? UpdateVehDto.km : vehicle.km;
    vehicle.name = UpdateVehDto.name ? UpdateVehDto.name : vehicle.name;
    vehicle.type = UpdateVehDto.type ? UpdateVehDto.type : vehicle.type;
    vehicle.year = UpdateVehDto.year ? UpdateVehDto.year : vehicle.year;
    vehicle.images = images ? images : vehicle.images;

    await this.vehicleRepository.save(vehicle);

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
