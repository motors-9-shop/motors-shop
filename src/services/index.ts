import axios from "axios";

export * from "./createAd"
export * from "./getAllAd"
export * from "./getProfile"
export * from "./getProfileByToken"
export * from "./updateAd"
export * from "./deleteAd"

export const api = axios.create({
    baseURL: "/api",
    timeout: 5000,
})
