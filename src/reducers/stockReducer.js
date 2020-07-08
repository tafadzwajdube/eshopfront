import { FETCH_STOCKS, NEW_STOCK, DELETE_STOCK } from '../actions/types'

const initialState = {
    items: [],
    item: {}
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
        default:
            return state;
    }
}