import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column('integer')
  number: number;

  @Column({ nullable: true })
  complement: string;

  @Column()
  cep: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}
