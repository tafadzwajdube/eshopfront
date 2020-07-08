import { combineReducers } from 'redux';
import productReducer from './productReducer';
import brandReducer from './brandReducer';
import saleReducer from './saleReducer';
import stockReducer from './stockReducer';
import errorReducer from './errorReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';



export default combineReducers({

    products: productReducer,
    brands: brandReducer,
    sales: saleReducer,
    stocks: stockReducer,
    error: errorReducer,
    categories: categoryReducer,
    user:userReducer,
    

});