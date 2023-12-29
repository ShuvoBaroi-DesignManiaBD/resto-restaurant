import axiosSecure from ".";

export const addToCart = async (food) => {
    console.log(food);
    const data = await axiosSecure.put(`/cart/add`, food);
    return data
}

export const getCartItems = async (id) => {
    console.log(id);
    const data = await axiosSecure.get(`/cart/get?id=${id}`);
    return data
}

