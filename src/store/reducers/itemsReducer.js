import { ADD_NEW_ITEM, BUY_ITEM, REMOVE_ITEM } from '../actions/itemAction';
import { VEGETABLES } from '../../data/DataPlaceHolder';

export default function itemsReducer(state = VEGETABLES, { type, payload }) {
    switch(type) {
        case ADD_NEW_ITEM:
            console.log(payload);
            return state;

        case BUY_ITEM:
            const itemsAndQty = payload.items.map(item => { return { id: item.id, qty: item.qty } });
            state.map(item => {
                const itemIndex = itemsAndQty.findIndex(({ id }) => id === item.id);
                if(itemIndex >= 0) {
                    item.qty -= itemsAndQty[itemIndex].qty;
                }
                return item;
            });
            return state;

        case REMOVE_ITEM:
            return state;

        default:
            return state;
    }

}