export const saveToCart = data => {
    localStorage.setItem("cart", JSON.stringify(data));
}

export const getCartItems = () => {
    const items = JSON.parse(localStorage.getItem("cart"))
    return items;
}

export const getCartItem = () => {
    const items = JSON.parse(localStorage.getItem("cart"))
    return items;
}
