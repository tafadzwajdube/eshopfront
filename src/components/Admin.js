import React from "react";
import Navbar from "./NavBar.js";
import NavButtons from "./NavButtons"
import Grid from '@material-ui/core/Grid';
import POS from './POS'
import { makeStyles } from "@material-ui/core/styles";
import { Provider, useSelector } from 'react-redux'




export default function Admin() {
    

    const user = useSelector(state => state.user.loggedin)

    const useStyles = makeStyles(theme => ({
        offset: theme.mixins.toolbar,
    }))
    const classes = useStyles();
    return (
        
        <div>
            <Navbar />
            <div className={classes.offset} />
            <br></br>
            <div>
                <Grid
                   container
                   direction="row"
                   justify="center"
                   alignItems="flex-start">
                    
                    <Grid
                        item
                        
                    xs={12}
                    >
                        {user && <NavButtons />}
                          
                        
                    </Grid>
            </Grid>

      </div>
            </div>
    )
}