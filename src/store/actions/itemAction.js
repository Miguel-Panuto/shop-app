export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addNewItem = (name, price, desc, qty) => {
    return {
        type: ADD_NEW_ITEM,
        payload: {
            id: ((new Date().getTime).toString + name),
            userId,
            name,
            price,
            desc,
            imageUrl: require('../../../assets/images/cenoura.jpg'),
            qty
        }
    }
}

export const editItem = (id, name, desc, price, qty, userId) => {
    return {
        type: EDIT_ITEM,
        payload: {
            id,
            userId,
            name,
            price,
            desc,
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