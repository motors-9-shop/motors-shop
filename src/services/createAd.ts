import { api } from ".";
import { CreateAdValues } from "../components/CreateAdModal";
import { IAd } from "../interfaces";

export const createAd = async (adCreateData: CreateAdValues) => {
    const { data } = await api.post<IAd | null>("/ads", adCreateData)

    return data
}