import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  ValidateNested,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { AdType } from '../entities/ad.entity';
import { Type } from 'class-transformer';
import { CreateVehicleDto } from './create-vehicle.dto';

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

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
