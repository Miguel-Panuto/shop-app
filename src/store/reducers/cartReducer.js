import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initialState = {
    items: []
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch(type) {
        case ADD_TO_CART:
            const onCartIndex = state.items.findIndex(item => item.id === payload.id);
            if(onCartIndex >= 0) {
                state.items[onCartIndex].qty += parseInt(payload.qty, 10);
                return state;
            }
            return {...state, items: state.items.concat(payload)};
        case REMOVE_FROM_CART:
            return state;
        default:
            return state;
    }
}