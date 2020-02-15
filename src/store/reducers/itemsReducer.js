import { ADD_NEW_ITEM, BUY_ITEM, REMOVE_ITEM } from '../actions/itemAction';
import { VEGETABLES } from '../../data/DataPlaceHolder';

export default function itemsReducer(state = VEGETABLES, { type, payload }) {
    switch(type) {
        case ADD_NEW_ITEM:
            return state;

        case BUY_ITEM:
            return state;

        case REMOVE_ITEM:
            return state;
            
        default:
            return state;
    }

}