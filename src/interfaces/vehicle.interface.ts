import { IAd } from "./ad.interface";
import { IImage } from "./image.interface";

export interface IVehicle {   
    id: string;
    name: string;
    km: number;
    year: number;
    bannerUrl: string;
    type: 'car' | 'motocycle';
    ad: IAd;
    images: IImage[]
}
