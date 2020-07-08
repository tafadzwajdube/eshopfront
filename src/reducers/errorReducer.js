import { GET_ERRORS,CLEAR_ERRORS,POST_SUCCESS,DELETE_SUCCESS } from '../actions/types'

const initialState = {
    errors: null,
    success: false,
    comment_success: false,
    delete_success: false
}


export default function (state = initialState, action) {

    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload
            };
        case POST_SUCCESS:
                return {
                    ...state,
                    success: true
            };
         
            case DELETE_SUCCESS:
                return {
                    ...state,
                    delete_success: true
                };
        case CLEAR_ERRORS:
                return {
                    ...state,
                    errors: null,
                    success: false,
                    comment_success: false,
                   delete_success: false
                };
        default:
            return state;
    }
}