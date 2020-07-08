import React, {useEffect, useState} from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { fetchProducts } from '../actions/productActions';
import { fetchCategories } from '../actions/categoryActions'
import { connect, useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { fetchBrands } from "../actions/brandActions.js";

export default function Admin() {

    const [cview, setCview]= useState(1)
    const dispatch = useDispatch();
    
    useEffect(() => {
     
        dispatch(fetchCategories())
        dispatch(fetchProducts())
        dispatch(fetchBrands())
    }, [])


    let history = useHistory();
    function handleIClick() {
        
        setCview(2)
        history.push("/inventory");
    }
    function handleSClick() {
        setCview(1)
        history.push("/");

    }
    function handlePClick() {
        setCview(3)
        history.push("/prices");
      }

    return (
        <Router >
            
        <div><Grid
        container
        direction="row"
        justify="center"
            alignItems="flex-start"
            spacing={3}>
            <Grid item>
                    {cview == 1 ?
                        <Button variant="contained" style={{ backgroundColor: '#00aaff' }} onClick={handleSClick}>Sale</Button>
                        :
                        <Button variant="contained" style={{ backgroundColor: '#cceeff' }} onClick={handleSClick}>Sale</Button>
                        }
            </Grid>
                <Grid item>
                    {cview == 2 ?
                        <Button variant="contained" style={{ backgroundColor: '#00aaff' }} onClick={handleIClick}>Inventory</Button>
                        :
                        <Button variant="contained" style={{ backgroundColor: '#cceeff' }} onClick={handleIClick}>Inventory</Button>

                }
            </Grid>
                <Grid item>
                    {cview == 3 ?
                        <Button variant="contained" style={{ backgroundColor: '#00aaff' }} onClick={handlePClick}>Prices</Button>
                        :
                        <Button variant="contained" style={{ backgroundColor: '#cceeff' }} onClick={handlePClick}>Prices</Button>
                    }
            </Grid>
                

            </Grid>
                <hr></hr>
            </div>
        </Router>
           
    )
}