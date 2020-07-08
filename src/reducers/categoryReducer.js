import { FETCH_CATEGORIES, NEW_CATEGORY, DELETE_CATEGORY } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}


export default function (state=initialState, action) {

    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                items: action.payload
        } ;
        case NEW_CATEGORY:
            return {
                ...state,
                item:action.payload
            }
            case DELETE_CATEGORY:
                return {
                    ...state,
                    item:action.payload
            }
        default:
            return state;
    }
}