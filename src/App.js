import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import { Grid } from '@material-ui/core';
import POS from './components/POS';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Inventory from './components/Inventory';
import ProductManager from './components/ProductManager';
import { Provider, useSelector } from 'react-redux'
import store from './store'

function App() {
  return (
<Provider store={store}>
    <React.Fragment>
      <Admin />
    <Grid
    container>
    <Grid
                        item
                        
                    xs={12}
                    >
        <Route path="/" exact component={POS} />
      <Route path="/inventory" component={Inventory} />
          <Route path="/prices" component={POS} />
          <Route path="/productmanager" component={ProductManager} />
                        
                    </Grid>
      </Grid>
      </React.Fragment>
      </Provider>
  );
}

export default App;
