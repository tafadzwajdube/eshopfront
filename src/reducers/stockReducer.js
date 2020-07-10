import { FETCH_STOCKS, NEW_STOCK, DELETE_STOCK, NEW_DAMAGED, FETCH_DAMAGED, DELETE_DAMAGED } from '../actions/types'

const initialState = {
    items: [],
    item: {},
    damaged_items: [],
    damaged_item:{}
}


export default function (state=initialState, action) {

    switch (action.type) {
        case FETCH_STOCKS:
            return {
                ...state,
                items: action.payload
        } ;
        case NEW_STOCK:
            return {
                ...state,
                item:action.payload
            }
            case DELETE_STOCK:
                return {
                    ...state,
                    item:action.payload
            }
            case FETCH_DAMAGED:
                return {
                    ...state,
                    damaged_items:action.payload
            }
            case NEW_DAMAGED:
                return {
                    ...state,
                    damaged_item:action.payload
            }
            case DELETE_DAMAGED:
                return {
                    ...state,
                    damaged_item:action.payload
            }
        default:
            return state;
    }
}