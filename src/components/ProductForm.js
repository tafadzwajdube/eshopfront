import React,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { newProduct } from "../actions/productActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
        width: '100%'
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 3, 1, 1)
    }
  }));


export default function ProductForm() {
  
  
  
  const dispatch = useDispatch();

    const classes = useStyles();
    const [name, setName] = useState()
    const[category, setCategory]=useState()
    
    const categories = useSelector(state => state.categories.items)

   

    const handleChange =(e)=> {
      setName(e.target.value)
    };

    const handleChangeC =(e)=> {
        setCategory(e.target.value)
      };
    const [openedForm, setOpenedForm] = React.useState(false);
    useEffect(() => {

      const timer = setTimeout(() => {
        dispatch(clearErrors())
        
      }, 5000);
      return () => clearTimeout(timer);

        }
        , [openedForm])
    
        const handleOpen = () => {
  
            if (openedForm)
              
            setOpenedForm(false)
              else
            setOpenedForm(true)
          }
          
          const handleSubmit = e => {
            e.preventDefault();
           
    
              const product = {
                name: name,
                category:category
            }
            dispatch(newProduct(product))
            setOpenedForm(false)
            
          }
    
          const errors = useSelector(state => state.error.errors)
          const success = useSelector(state => state.error.success)
    return (
        <div>
            <br/>
         

            <Button onClick={handleOpen} style={{color:'#006699'}}>New Product <ArrowDropDownIcon/></Button>
            <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start">
          <Grid
          item>
            <Paper elevation={3}
            
            >
            {openedForm && <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography style={{ textAlign: 'center' }} variant="overline" display="block" gutterBottom>
            New Product
    </Typography>
          
    <div>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                                    native
                                    value={category}
                                    onChange={handleChangeC}
          inputProps={{
            name: 'category',
            id: 'category',
          }}
                                >
                                     <option aria-label="None" value="" />
          {categories.map(category =>
            <option value={category.id}>{category.name}</option>
                                        )}
                        </Select>
                </div>
                <div>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={handleChange}
                        fullWidth
            
                    />
                </div>
                
           
                <Button type="submit" size="small" variant="contained" color="primary" className={classes.margin}>Submit</Button>
                <Button type="submit" size="small" variant="contained" color="secondary" onClick={handleOpen} className={classes.margin}>Cancel</Button>
            
              </form>
             
              }
                 </Paper>
                </Grid>
                </Grid>

            </div>
    )
}