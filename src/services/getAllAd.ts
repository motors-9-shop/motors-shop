import { api } from "."
import { IAd } from "../interfaces"

interface IGetAllAdResponse {
    sell: {
        car: IAd[]
        motocycle: IAd[]
    }
}

export const getAllAd = async () => {
    const { data } = await api.get<IGetAllAdResponse>("/ads")

    return data
}
