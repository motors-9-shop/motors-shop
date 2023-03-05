import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ad } from '../../ads/entities/ad.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: 'SET NULL',
    eager: true,
  })
  user: User;

  @ManyToOne(() => Ad, (ad) => ad.comments, { onDelete: 'CASCADE' })
  ad: Ad;
}
