import axiosSecure from ".";

export const addFood = async (food) => {
    const data = await axiosSecure.post(`/add-food`, food);
    return data
}

export const getFood = async (id) => {
    const data = await axiosSecure.get(`/foods/${id}`);
    return data
}

export const getAllFoods = async (page) => {
    console.log(page);
    const data = await axiosSecure.get(`/all-foods?page=${page}`);
    return data
}

export const searchFoods = async (keyword, page) => {
    console.log(page);
    const data = await axiosSecure.get(`/search?keyword=${keyword}&page=${page}`);
    return data
}

export const getAddedFoods = async (email, page) => {
    console.log(page);
    const data = await axiosSecure.get(`/added-foods?email=${email}&page=${page}`);
    return data
}