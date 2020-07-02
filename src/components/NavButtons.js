import React from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function Admin() {
    
    let history = useHistory();
    function handleIClick() {
        history.push("/inventory");
    }
    function handleSClick() {
        history.push("/");
    }
    function handlePClick() {
        history.push("/inventory");
      }

    return (
        <Router>
            
        <Grid
        container
        direction="row"
        justify="center"
            alignItems="flex-start"
            spacing={3}>
            <Grid item>
            <Button variant="contained" onClick={handleSClick}>Sale</Button>
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={handleIClick}>Inventory</Button>
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={handlePClick}>Prices</Button>
            </Grid>
                

            </Grid>
        </Router>
           
    )
}