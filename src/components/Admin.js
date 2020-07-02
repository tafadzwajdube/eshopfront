import React from "react";
import Navbar from "./NavBar.js";
import NavButtons from "./NavButtons"
import Grid from '@material-ui/core/Grid';
import POS from './POS'



export default function Admin() {
    

    return (
        
        <div>
            <Navbar />
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
                        <NavButtons />
                        
                    </Grid>
            </Grid>

      </div>
            </div>
    )
}