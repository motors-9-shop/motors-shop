import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { User } from '../../users/entities/user.entity';
import { Vehicle } from './vehicle.entity';

export enum AdType {
  SELL = 'sell',
  AUCTION = 'auction',
}

@Entity()
export class Ad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @Column('money')
  price: string | number;

  @Column('enum', { enum: AdType })
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.ads)
  user: User;

  @OneToOne(() => Vehicle, (vehicle) => vehicle.ad)
  vehicle: Vehicle;

  @OneToMany(() => Comment, (comment) => comment.ad)
  comments: Comment[];
}
