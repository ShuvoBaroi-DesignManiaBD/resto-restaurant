import axiosSecure from ".";

export const addFood = async (food) => {
    const data = await axiosSecure.post(`/add-food`, food);
    return data
}

export const getAllFoods = async (page) => {
    console.log(page);
    const data = await axiosSecure.get(`/all-foods?page=${page}`);
    return data
}
