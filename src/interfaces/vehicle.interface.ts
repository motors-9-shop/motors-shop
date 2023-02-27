import { IAd } from "./ad.interface";

export interface IVehicle {   
    id: string;
    name: string;
    km: number;
    year: number;
    bannerUrl: string;
    type: 'car' | 'motocycle';
    ad: IAd;
    images: string;
}
