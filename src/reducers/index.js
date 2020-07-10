import { combineReducers } from 'redux';
import productReducer from './productReducer';
import brandReducer from './brandReducer';
import saleReducer from './saleReducer';
import stockReducer from './stockReducer';
import errorReducer from './errorReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'products', 'brands','categories','stocks','sales']
}

const rootReducer = combineReducers({
    products: productReducer,
    brands: brandReducer,
    sales: saleReducer,
    stocks: stockReducer,
    error: errorReducer,
    categories: categoryReducer,
    user:userReducer,
    
})

export default persistReducer(persistConfig, rootReducer);
/* 
export default combineReducers({

    products: productReducer,
    brands: brandReducer,
    sales: saleReducer,
    stocks: stockReducer,
    error: errorReducer,
    categories: categoryReducer,
    user:userReducer,
    

}); */