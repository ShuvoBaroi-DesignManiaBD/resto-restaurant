
import axiosPublic from "../Hooks/useAxiosPublic";
import { axiosSecure } from "../Hooks/useAxiosSecure";


export const addFood = async (food) => {
    const data = await axiosPublic.post(`/add-food`, food);
    return data
}

export const getFood = async (id) => {
    const data = await axiosSecure.get(`/foods/${id}`);
    return data
}

export const updateFood = async (id, food) => {
    const data = await axiosPublic.put(`/food/update?id=${id}`, food);
    return data
}

export const getAllFoods = async (page) => {
    console.log(page);
    const data = await axiosPublic.get(`/all-foods?page=${page}`);
    return data
}

export const getTopSellingFoods = async () => {
    const data = await axiosPublic.get(`/top-selling-foods`);
    console.log(data);
    return data
}

export const searchFoods = async (keyword, page) => {
    console.log(page);
    const data = await axiosPublic.get(`/search?keyword=${keyword}&page=${page}`);
    return data
}

export const getAddedFoods = async (email, page) => {
    console.log(page);
    const data = await axiosPublic.get(`/added-foods?email=${email}&page=${page}`);
    return data
}