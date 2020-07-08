import React, {useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button,Grid, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import { newCategory } from "../actions/categoryActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'
import { newBrand, fetchBrands } from '../actions/brandActions';
import { fetchProducts } from '../actions/productActions'



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

export default function BrandForm({ product }) { 

  const dispatch = useDispatch();
  const [openedForm, setOpenedForm] = React.useState();

  useEffect(() => {
  
    const timer = setTimeout(() => {
      dispatch(clearErrors())
      
    }, 5000);
    return () => clearTimeout(timer);

      }
      , [openedForm])
   
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        zimrand: '',
        sarand: '',
        zimusd: '',
      });

     
    
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)

      const brand = {
          product:product,
            name: values.name,
            zim_price_rand: values.zimrand,
            zim_price_usd: values.zimusd,
            sa_price:values.sarand
            
      }

      dispatch(newBrand(brand))
      setOpenedForm(1)

        setValues({ ...values, 
            name: '',
        zimrand: '',
            sarand: '',
        zimusd:''
      });
      }
    
      const errors = useSelector(state => state.error.errors)
      const success = useSelector(state => state.error.success)
    
return(
  <Paper variant="outlined" className={classes.paper}>
    
       {errors && <Alert severity="error">{errors.message}</Alert>} 
    {success && <Alert severity="success">Successfully  added</Alert>}
    
    {/**CREATE FORM TO CAPTURE FAMILY DETAILS */}
    <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start">
          <Grid
          item>
            
  <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
    <Typography style={{textAlign: 'center'}} variant="overline" display="block" gutterBottom>
        Add Brand
    </Typography>
        <div>
            <TextField
            label="Name"
            value={values.name} 
            onChange={handleChange('name')} 
            
            
            />
            </div>  
            <div>
        <TextField
            label="Zim Rand Price"
            type="number"
            value={values.zimrand} 
            onChange={handleChange('zimrand')} 
            
           
            
                />
            </div>
            <div>
               <TextField
            label="SA Rand Price"
            type="number"
            value={values.sarand} 
            onChange={handleChange('sarand')} 
            
           
            
                />
            </div>
            <div>
               <TextField
            label="Zim USD Price"
            type="number"
            value={values.zimusd} 
            onChange={handleChange('zimusd')} 
          
            
                />
                </div>
      <Button type="submit" size="small"variant="contained" color="primary" className={classes.margin}>Submit</Button>
          </form>
          
          </Grid>
          </Grid>
  </Paper>
)





}