import axios from "axios";

const api = axios.create({
  baseURL: "base-api",
  timeout: 5000,
});

export default api;
