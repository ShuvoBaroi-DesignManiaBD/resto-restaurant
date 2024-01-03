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

export const deleteUserCart = async (id) => {
    console.log(id);
    const data = await axiosSecure.delete(`/cart/user/delete?id=${id}`);
    return data
}

export const deleteFromCart = async (id, foodid, quantity) => {
    console.log(id);
    const data = await axiosSecure.delete(`/cart/user/food/delete?userid=${id}&foodid=${foodid}&qty=${quantity}`);
    return data
}

