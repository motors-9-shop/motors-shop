import { api } from ".";
import { UpdateAdValues } from "../contexts/profileContext";
import { IAd } from "../interfaces";

export const updateAd = async (id: string, adUpdateData: UpdateAdValues) => {
    const { data } = await api.patch<IAd | null>(`/ads/${id}`, adUpdateData)

    return data
}