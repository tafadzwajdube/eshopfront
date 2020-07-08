import { LOGIN, LOGOUT, REGISTER, SET_USER } from '../actions/types'

const initialState = {
  /*   items: [],
    item: {} */
    loggedin: false,
    registered:false,
    user: {}
}


export default function (state=initialState, action) {
  
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedin:action.loggedin,
                user: action.payload,
        } ;
        case LOGOUT:
            return {
                ...state,
                loggedin: action.loggedin,
                registered:false,
                user: {}
            }
        case REGISTER:
            console.log('register') 
                return {
                    ...state,
                    registered:action.registered,
                    user: action.payload,
                    loggedin:action.loggedin
                }
        case SET_USER:
            return {
                ...state,
                registered: action.registered,
                user: action.payload,
                loggedin:action.loggedin

            }
        
        default:
            return state;
    }
}