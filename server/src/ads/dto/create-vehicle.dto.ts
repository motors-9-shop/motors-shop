import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
} from 'class-validator';
import { VehicleType } from '../entities/vehicle.entity';

export class CreateVehicleDto {
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
