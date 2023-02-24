import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ad } from './ad.entity';
import { Image } from './image.entity';

export enum VehicleType {
  CAR = 'car',
  MOTOCYCLE = 'motocycle',
}

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('integer')
  km: number;

  @Column('integer')
  year: number;

  @Column()
  bannerUrl: string;

  @Column('enum', { enum: VehicleType })
  type: VehicleType;

  @OneToOne(() => Ad, (ad) => ad.vehicle, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  ad: Ad;

  @OneToMany(() => Image, (image) => image.vehicle, { cascade: true })
  images: Image[];
}
