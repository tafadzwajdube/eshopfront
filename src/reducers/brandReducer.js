import { FETCH_BRANDS, NEW_BRAND, DELETE_BRAND } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}


export default function (state=initialState, action) {

    switch (action.type) {
        case FETCH_BRANDS:
            return {
                ...state,
                items: action.payload
        } ;
        case NEW_BRAND:
            return {
                ...state,
                item:action.payload
            }
            case DELETE_BRAND:
                return {
                    ...state,
                    item:action.payload
            }
        default:
            return state;
    }
}