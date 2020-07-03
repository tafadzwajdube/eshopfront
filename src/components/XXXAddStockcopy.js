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
            <Button>Add stock</Button> 
            <Button>View Inventory</Button> 
            <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
         </div>
)


}