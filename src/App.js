import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import { Grid } from '@material-ui/core';
import POS from './components/POS';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Inventory from './components/Inventory';
function App() {
  return (

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
                        
                    </Grid>
      </Grid>
      </React.Fragment>

  );
}

export default App;
