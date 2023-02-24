import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateAdDto } from './create-ad.dto';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateAdDto extends PartialType(CreateAdDto) {
  @Type(() => PartialType(CreateVehicleDto))
  vehicle?: CreateVehicleDto;
}
