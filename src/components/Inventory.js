import React, {useState,useEffect} from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddStock from "./AddStock.js";


export default function Inventory() { 


    return (
    
        <div>

            <br></br>
            <Button>Add stock</Button> 
            <Button>View Inventory</Button>
            <br></br>
            <AddStock/>
        </div>
)


}