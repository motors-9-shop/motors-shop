import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsCurrency,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  isNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AdType } from '../entities/ad.entity';
import { CreateVehicleDto } from './create-vehicle.dto';

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsCurrency({
    digits_after_decimal: [1, 2],
    thousands_separator: '.',
    decimal_separator: ',',
    require_symbol: false,
  })
  @IsNotEmpty()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      value = value.replace(/[^\d,.]/g, '');
    }

    if (isNumberString(value) || typeof value === 'number') {
      value = (+value).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      (value);
    }

    return value;
  })
  price: string;

  @IsEnum(AdType)
  @IsNotEmpty()
  type: AdType;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateVehicleDto)
  vehicle: CreateVehicleDto;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
