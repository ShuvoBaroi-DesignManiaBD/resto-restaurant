import { axiosSecure } from "../Hooks/useAxiosSecure";


export const addOrder = async (order) => {
    const data = await axiosSecure.post(`/orders/add-new`, order);
    return data
}

export const getOrders = async (id, page) => {
    console.log(id);
    const data = await axiosSecure.get(`/orders/get?id=${id}&page=${page}`);
    return data
}

export const deleteOrder = async (id) => {
    const data = await axiosSecure.delete(`/orders/delete?id=${id}`);
    return data
}

