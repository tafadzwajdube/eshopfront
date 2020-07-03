import { combineReducers } from 'redux';
import productReducer from './productReducer';
import brandReducer from './brandReducer';



export default combineReducers({

    products: productReducer,
    brands:brandReducer,
    

});