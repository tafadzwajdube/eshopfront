import React, {useState,useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ListItem, Button, Divider, ListItemText, Typography, TextField, Paper} from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import { connect, useSelector, useDispatch } from 'react-redux';





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

export default function BrandForm({ household }) { 


   
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
            name: values.name,
            zim_price_rand: values.zimrand,
            zim_price_usd: values.zimusd,
            sa_price_rand:values.sarand
            
      }

      

        setValues({ ...values, 
            name: '',
        zimrand: '',
            sarand: '',
        zimusd:''
      });
      }
    
  
    
return(
    <Paper variant="outlined" className={classes.paper}>
       
    {/**CREATE FORM TO CAPTURE FAMILY DETAILS */}
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
  </Paper>
)





}