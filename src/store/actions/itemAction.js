export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addNewItem = (id, name, price, desc, imageUrl, qty) => {
    return {
        type: ADD_NEW_ITEM,
        payload: {
            id,
            userId,
            name,
            price,
            desc,
            imageUrl,
            qty
        }
    }
}

export const buyItem = (items) => {
    return {
        type: BUY_ITEM,
        payload: {
            items
        }
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        payload: {
            id
        }
    }
}