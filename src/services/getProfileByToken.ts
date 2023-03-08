import { api } from "."
import { IUser } from "../interfaces"

export const getProfileByToken = async () => {
    const token = localStorage.getItem("@kenzie-motors:token")
    if(token){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const { data } = await api.get<IUser | null>("profile")
    
        return data
    }
}