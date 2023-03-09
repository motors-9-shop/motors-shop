import { ApiHideProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
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
  @ApiHideProperty()
  @Exclude()
  password: string;

  @Column('date')
  dateOfBirth: string;

  @Column({ unique: true, length: 11 })
  @ApiHideProperty()
  @Exclude()
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column()
  description: string;

  @Column('enum', { enum: UserRole, default: UserRole.COMMON })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  recoveryCode: string;

  @OneToOne(() => Address, (address) => address.user, {
    cascade: true,
    eager: true,
  })
  @Expose({ groups: ['personal'] })
  address: Address;

  @OneToMany(() => Ad, (ad) => ad.user)
  ads: Ad[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
