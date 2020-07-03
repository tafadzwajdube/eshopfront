import React, {useState,useEffect} from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddStock from "./AddStock.js";
import ViewInventory from "./ViewInventory.js"
import { useHistory } from "react-router-dom";
import { fetchProducts } from '../actions/productActions'
import { connect, useSelector, useDispatch } from 'react-redux';

export default function Inventory() { 

  const dispatch = useDispatch();


    const [state, setState] = useState(
        {
            view: '0'
            

        }
 )

    useEffect(() => {
     
     
    
    }, [state.view])

    const handleViews = (event) => {
        console.log(state.view)
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.name,
        });

    }
    const handleAddView = () => {
      
       
        setState({
          ...state,
          ['view']: 1,
        });

    }

    const handleInventoryView = () => {
      dispatch(fetchProducts);
       
        setState({
          ...state,
          ['view']: 2,
        });

    }

    let history = useHistory();
    function handlePClick() {
        history.push("/productmanager");
      }
    return (
    
        <div>

            <br></br>
            <Button name='addstock' value={1} onClick={handleAddView}>Add Stock</Button> 
            <Button name='viewinventory' value={2} onClick={handleInventoryView}>View Inventory</Button>
            <br></br>
           {state.view==1&& <AddStock/>}
            {state.view == 2 && <ViewInventory />}
            
        </div>
)


}