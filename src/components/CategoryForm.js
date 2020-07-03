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
        width: '70%'
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 3, 1, 1)
    }
  }));


export default function CategoryForm() {
    
    const classes = useStyles();
    const [name, setName] = useState()
    
    const handleChange =(e)=> {
      setName(e.target.value)
    };

    const [openedForm, setOpenedForm] = React.useState(false);
    useEffect(() => {
        
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
           
    
              const category = {
                  name: name,
              }
            
          }
    
    
    return (
        <div>
            <br/>
           
            <Button onClick={handleOpen}>New Category</Button>
          
            {openedForm && <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography style={{ textAlign: 'center' }} variant="overline" display="block" gutterBottom>
                    New Category
    </Typography>
                <div>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={handleChange}
                        fullWidth
            
                    />
                </div>
           
                <Button type="submit" size="small" variant="contained" color="primary" className={classes.margin}>Submit</Button>
            </form>
            }

            </div>
    )
}