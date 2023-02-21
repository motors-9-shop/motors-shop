import { hashSync } from 'bcryptjs';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ad } from '../../ads/entities/ad.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Address } from './address.entity';

export enum UserRole {
  ADMIN = 'admin',
  COMMON = 'common',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({
    transformer: {
      to: (value) => hashSync(value, 10),
      from: (value) => value,
    },
  })
  password: string;

  @Column('date')
  dateOfBirth: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column()
  description: string;

  @Column('enum', { enum: UserRole, default: UserRole.COMMON })
  role: UserRole;

  @JoinColumn()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Ad, (ad) => ad.user)
  ads: Ad[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
