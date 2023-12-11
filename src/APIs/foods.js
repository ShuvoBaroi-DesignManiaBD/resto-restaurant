import axiosSecure from ".";

export const addFood = async (food) => {
    const data = await axiosSecure.post(`/add-food`, food);
    return data
}