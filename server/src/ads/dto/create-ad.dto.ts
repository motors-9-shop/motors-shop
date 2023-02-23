import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { VehicleType } from '../entities/vehicle.entity';
import { AdType } from '../entities/ad.entity';
import { Type } from 'class-transformer';
import { Image } from '../entities/image.entity';

class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  bannerUrl: string;

  @IsEnum(VehicleType)
  @IsNotEmpty()
  type: VehicleType;

  @IsArray()
  images: string[];
}

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsEnum(AdType)
  @IsNotEmpty()
  type: AdType;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateVehicleDto)
  vehicle: CreateVehicleDto;

  @IsBoolean()
  isActive: boolean;
}
