import React from 'react'
import LoginForm from './LoginForm'
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

function LoginPage() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex'
        },
    }))
        
    return (
        // <div style={{backgroundColor:'#b3d9ff', }}>
        <React.Fragment>
         <CssBaseline />
      <Container className='root' style={{backgroundColor:'#80bfff', height:'100%'}}>
           <br></br>
                <Typography>Store admin</Typography> 
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{marginTop:'40%', }}>

                    
             <Grid
        
                item
                md={4}
                >
                  <LoginForm />   

            </Grid>
                </Grid>
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                    style={{ marginBottom: '0%', }}>
                    <Grid item>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Grid>
                    </Grid>
               
           
            </Container>  
            </React.Fragment>
    )
}

export default LoginPage
