import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { Ad } from './entities/ad.entity';
import { Image } from './entities/image.entity';
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ad, Image, Vehicle])],
  controllers: [AdsController],
  providers: [AdsService],
})
export class AdsModule {}
