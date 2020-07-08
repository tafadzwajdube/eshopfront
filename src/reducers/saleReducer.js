import { FETCH_SALES, NEW_SALE, DELETE_SALE } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}


export default function (state=initialState, action) {

    switch (action.type) {
        case FETCH_SALES:
            return {
                ...state,
                items: action.payload
        } ;
        case NEW_SALE:
            return {
                ...state,
                item:action.payload
            }
            case DELETE_SALE:
                return {
                    ...state,
                    item:action.payload
            }
        default:
            return state;
    }
}