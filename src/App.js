import React, { useEffect} from 'react';
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
import LoginPage from './components/LoginPage'
import { createBrowserHistory } from 'history';
import { setuser } from './actions/userActions';
import LoginForm from "./components/LoginForm.js";
import ViewPrices from './components/ViewPrices'
import AddDamagedStock from './components/AddDamagedStock';


function App() {

  const user = useSelector(state => state.user.loggedin)

  useEffect(() => {
  
    const access = localStorage.getItem('access_token')
    if (access) {
      store.dispatch(setuser(access))
    }

  }, [])  
  
  const myhistory = createBrowserHistory();

  return (
//<Provider store={store}>
    <React.Fragment>
      {user && <Admin />}
      <div style={{ height: '100%' }}>
    <Grid
    container>
    <Grid
                        item
                        
                    xs={12}
                    >
        {/*   <Route path="/" exact component={POS} /> */}
          
        <Route path="/" exact  render={props => {
              return (
                ( 
                  <div>
                    {user ?
                      <POS />
                      :
                      <React.Fragment>
                      
                          <LoginPage />
                     
                  </React.Fragment>
                  }
                  </div>
                )
              )
            }} />
           {/*  <Route path="/login" exact component={LoginPage} /> */}
      <Route path="/inventory" component={Inventory} />
            <Route path="/prices" component={ViewPrices} />
            <Route path="/productmanager" component={ProductManager} />
            <Route path="/inventorymanager" component={AddDamagedStock} />
                        
                    </Grid>
        </Grid>
        </div>
      </React.Fragment>
  //    </Provider>
  );
}

export default App;
