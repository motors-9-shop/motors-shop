import axios from "axios";

export * from "./getAllAd"

export const api = axios.create({
    baseURL: "/api",
    timeout: 5000,
})
