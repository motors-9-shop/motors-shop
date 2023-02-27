import { IComment } from "./comment.interface";
import { IUser } from "./user.interface";
import { IVehicle } from "./vehicle.interface";

export interface IAd {
  id: string;
  description: string;
  isActive: boolean;
  price: string | number;
  type: "sell" | "auction";
  createdAt: string;
  updatedAt: string;
  user: IUser;
  vehicle: IVehicle;
  comments: IComment[];
}