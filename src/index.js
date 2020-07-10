import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from 'react-redux'

import {PersistGate} from 'redux-persist/integration/react'
import { store, persistor } from './store'

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
  
  </React.StrictMode>
  </Provider>
</BrowserRouter>,
/*   <React.StrictMode>
    <App />
  </React.StrictMode>, */
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
