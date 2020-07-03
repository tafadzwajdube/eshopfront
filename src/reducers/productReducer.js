import { FETCH_PRODUCTS, NEW_PRODUCT, DELETE_PRODUCT } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}


export default function (state=initialState, action) {

    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
        } ;
        case NEW_PRODUCT:
            return {
                ...state,
                item:action.payload
            }
            case DELETE_PRODUCT:
                return {
                    ...state,
                    item:action.payload
            }
        default:
            return state;
    }
}