import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];



let val


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    val =  createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()     )
       
    );
        

} else {
    // production code
    val = val =  createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare),  /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  */  )
       
    );
}

export const store = val


export const persistor= persistStore(store)
export default { store, persistor };