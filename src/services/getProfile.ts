import { api } from "."
import { IUser } from "../interfaces"

export const getProfile = async (id: string) => {
    const { data } = await api.get<IUser | null>(`users/${id}`)

    return data
}