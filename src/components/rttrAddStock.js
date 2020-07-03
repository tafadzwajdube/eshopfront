import React, {useState,useEffect} from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';


export default function AddStock() { 

    const [state, setState] = React.useState({
        columns: [
          { title: 'Product', field: 'product' },
          { title: 'Brand', field: 'brand' },
            { title: 'Quantity', field: 'quantity', type: 'numeric' },
        { title: 'Unit Cost', field: 'UnitCost', type: 'numeric' },
            { title: 'Total Cost', field: 'totalCost', type: 'numeric' },
                ],
        data: [
          { product: 'Meh', brand: 'Baran', quantity: 1987, unitCost: 63, totalCost:10 },
         
        ],
      });
    
    return (
    
        <div>

            <br></br>
            <Button>Add item</Button> 
          
         </div>
)


}