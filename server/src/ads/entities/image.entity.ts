import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.images, {
    nullable: false,
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  vehicle: Vehicle;
}
