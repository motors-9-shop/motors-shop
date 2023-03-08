import { api } from ".";
import { IAd } from "../interfaces";

export const deleteAd = async (id: string) => {
    await api.delete(`/ads/${id}`)
}