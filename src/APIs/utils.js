import axios from "axios";
import axiosPublic from "../Hooks/useAxiosPublic";
import { axiosSecure } from "../Hooks/useAxiosSecure";

// JWT related API
export const JWT = async (user) => {
    const data = await axios.post(`/jwt`, user);
    return data
}

export const logOut = async (user) => {
    const data = await axiosSecure.post(`logout`, user);
    return data
}