export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (id, name, price, qty, imageUrl) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            name,
            price,
            qty,
            imageUrl,
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id
        }
    }
}