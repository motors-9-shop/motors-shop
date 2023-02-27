import { api } from "."
import { IAd } from "../interfaces"

export const getAllAd = async () => {
    const { data } = await api.get<IAd[]>("/ads")

    return data
}
