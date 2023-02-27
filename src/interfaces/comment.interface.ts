import { IAd } from "./ad.interface";
import { IUser } from "./user.interface";

export interface IComment {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  ad: IAd;
}