import React, { useState} from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Divider, ListItemText, Typography, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import BrandForm from './BrandForm'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
      textTransform: 'uppercase'
    },
    inlinePadding: {
      display: 'inline',
      marginLeft: '3ch'
    },
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 3, 1, 1)
    }
  }));

export default function ProductManager() {
    
    const classes = useStyles();

    const [count, setCount] = useState(0);
    const [productid, setProductid] = useState('');

    const products = [
        {
            id: 1, name: "Rice", brands: [
                { id: 1, name: "Spekko 2Kg" },
                { id: 2, name: "Spekko 5Kg" },
                {id:3, name:"Spekko 10Kg"}
            ]
        },

        {
            id: 2, name: "Sugar", brands: [
                { id: 4, name: "Goldstart 2Kg" },
                { id: 5, name: "Hullet 5Kg" },
                {id:6, name:"Hullet 10Kg"}
            ]
        }
    ]

    return (
        <div>
            <br/>
           
            <CategoryForm />
            <ProductForm />
            <Divider variant="middle" />
            <hr></hr>
            <h5>Products</h5>
            <List className={classes.root}>

                {products.map(product =>
                    <ListItem
        key={product.id}
                    alignItems="flex-start">
                    
                    <ListItemText
                        primary={product.name} //"16125 Nkulumane 12, Ward 20- Coolland"
                        secondary={<React.Fragment>{(productid==product.id) &&
                            <React.Fragment>
                            {product.brands.map(brand=>< div  key={brand.id}>
                                {brand.name}
                </div>)}
                            </React.Fragment> 
                        }
          
          {(count === product.id) && <BrandForm product={product.id}/>}
            { (productid === product.id) ? <Button size="small" variant="outlined" startIcon={<VisibilityOffIcon />} className={classes.margin} onClick={() => setProductid('')}>Hide Brands</Button> : <Button size="small" variant="outlined" startIcon={<VisibilityIcon />} className={classes.margin} onClick={() => setProductid(product.id)}>View Brands</Button>}
            {(count ===0) ? <Button size="small" variant="outlined" startIcon={<AddIcon />} className={classes.margin} onClick={() => setCount(product.id)}>Add Brand</Button> : <Button size="small" variant="outlined" className={classes.margin} onClick={() => setCount(0)}>Cancel</Button>}
          
                        </React.Fragment>}
                    />
                    
                </ListItem>)}
                
                



            </List>


            </div>
    )
}