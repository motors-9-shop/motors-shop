import { IAd } from "./ad.interface";
import { IAddress } from "./address.interface";

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  dateOfBirth?: string;
  cpf?: string;
  phone?: string;
  description?: string;
  role?: "admin" | "common";
  createdAt?: string;
  updatedAt?: string;
  photo?: string;
  address?: IAddress;
  ads?: IAd[];
  comments?: Comment[];
}
