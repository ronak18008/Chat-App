import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: "http://localhost:4590/api",
=======
    baseURL: "http://localhost:5173/api",
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf
    withCredentials: true,
})