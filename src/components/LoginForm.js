import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, IconButton, InputLabel, OutlinedInput,InputAdornment, FormControl, Typography, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions/userActions'
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'
import { createBrowserHistory } from 'history';
//import Logo from '../images/ekhaya.png'
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    textField: {
        width: '90%',
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    span: {
        fontWeight: '600'
    }
}));

 function LoginForm(props) {

    const auth = useSelector(state => state.user.loggedin);
    const token = useSelector(state => state.user.user);

    useEffect(() => {
  
         if (auth) {
          props.history.push('/')
        //   console.log(token.access_token)
        } 
        const timer = setTimeout(() => {
            dispatch(clearErrors())
            
          }, 10000);
          return () => clearTimeout(timer);
        
     }
        , [auth])
      
     
      const dispatch = useDispatch();

    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    


    function handleSubmit() {

        console.log('submit')
        const userDetails = {
          email: values.email,
          password: values.password
        }
       
        dispatch(login(userDetails, () => {
            props.history.push('/')
        }));
       
       
    
    }
    const errors = useSelector(state => state.error.errors)
    const success = useSelector(state => state.error.success)
    
    return (
        <div className={classes.root}>
           <div className="auth-card">
                
                <Paper elevation={3} className={classes.paper}>
                    <div>
                    {errors && <Alert severity="error">{errors.message}</Alert>} 
        {success && <Alert severity="success">Family added</Alert>}
                        <Typography variant="h6" gutterBottom>
                            Admin Login
                        </Typography>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.email}
                                onChange={handleChange('email')}
                                startAdornment={<InputAdornment position="start"><MailOutlineIcon /></InputAdornment>}
                                labelWidth={45}
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                        </FormControl>
                        {/* <Link to="/dashboard"> */}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<LockOpenIcon />}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button> 
                        {/* </Link> */}
                    </div> 
                </Paper>
                <Link to="/" style={{color: '#fff', margin: '15px 0 50px 0', textDecoration: 'none'}}>Forgot password <span className={classes.span}></span></Link>
           </div>
        </div>
    )
}



export default withRouter(LoginForm)