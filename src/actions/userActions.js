import { LOGIN, LOGOUT, REGISTER,SET_USER, UPDATE_USER,GET_ERRORS, POST_SUCCESS } from './types';
import axios from 'axios'


export function login(userDetails) {
  


  const headers = {
    'Content-Type': 'application/json',
  //  'Authorization': token
}



return async function (dispatch) {

    
    await axios.post('http://store.ubhejanelabs.com/api/login', userDetails, {
     headers:headers
    }).then(userDetails => {
                console.log(userDetails.data.message)
                if (userDetails.data.message) {
                    dispatch({
                        type: LOGIN,
                        payload: userDetails.data,
                        loggedin: false
                        //write to local storage
                    })
                    dispatch({
                      type: GET_ERRORS,
                      payload:userDetails.data.message
                    })
                }
            
           else
                {

                    //write to local
                    localStorage.setItem('access_token', userDetails.data.access_token);
                    //localStorage.setItem('user',JSON.stringify(userDetails.user))

                    dispatch({
                        type: LOGIN,
                        payload: userDetails.data,
                        loggedin: true
                        //write to local storage
                    }) 
                    
                }
    })
    .catch(function (error) {
      console.log(error);
      dispatch({
          type:GET_ERRORS,
        payload: {message:"Login failed: invalid login credentials"}
      })
    });
      }
}
    



export function logout() {

    localStorage.removeItem('access_token');
    return function (dispatch) {
        dispatch({
            type: LOGOUT,
            loggedin: false
            //delete from local storage
        })
        };
        //async function fetchData() {
           /*  setPosts(
              await */
      /* fetch('http://192.168.86.51/portalapi/public/api/login', {
        method: 'POST',
          headers: {
          'accept':'application/json',
          'content-type': 'application/json',
           },
        body: JSON.stringify(userDetails)
  
      })
          .then(res => res.json())
          .then(userDetails => dispatch({
              type: LOGOUT,
              loggedin:false
          }))
      //  .then(data => console.log(data));
            // .then(   res => res.data)
              //.catch(err => console.log(err,'fetch warning'))
            /* )
          } )*/
  
    
}
  



export function register(userDetails) {
  
  console.log(userDetails)
  const headers = {
    'Content-Type': 'application/json',
    //'Authorization': token
}

  return async function (dispatch) {

    
    await axios.post('http://store.ubhejanelabs.com/api/register', userDetails, {
     headers:headers
    })  .then(userDetails => {

              if (userDetails.data.message) {

                  dispatch({
                      type: REGISTER,
                      payload: userDetails.data.message,
                      registered: false
                      //write to local storage
                  })
              }

              else {
                dispatch({
                    type: REGISTER,
                    payload: userDetails.data,
                    registered: true,
                    loggedin:true
                    //write to local storage
                })
                  
              }
          })
          .catch(function (error) {
            console.log(error);
            dispatch({
                type:GET_ERRORS,
                payload: error
            })
          });
  
    }
}
  
export function setuser(token) {
  
    token='Bearer '+token
  console.log(token)

  const headers = {
    'accept':'application/json',
    'content-type': 'application/json',
   'Authorization' : token
}

  

  return async function (dispatch) {
        
    await axios.get("http://store.ubhejanelabs.com/api/user", {
      headers:headers
    })  .then(userDetails => {

              if (userDetails.data.message) {

                  dispatch({
                      type: REGISTER,
                      payload: userDetails.data.message,
                      registered: false
                      //write to local storage
                  })
              }

              else {
                dispatch({
                    type: SET_USER,
                    payload: userDetails.data,
                    registered: true,
                    loggedin:true
                    //write to local storage
                })
                  
              }
          })
          .catch(function (error) {
            console.log(error);
            dispatch({
                type:GET_ERRORS,
                payload: error
            })
          });
  
    }
}
  

export function updateUser(password) {
  
  const token0 =localStorage.getItem('access_token')?localStorage.getItem('access_token'):'fail'//"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwOTZiNTNmMWE3N2U4NjUzOWIyNzcxMTE0YmIxMjE2YjRiOTVkYWE5YmYxYWMxN2U1OWE0Yjk2ZDUyZjE1N2MxZGM2NDM1MGE1ZmY3ODgwIn0.eyJhdWQiOiIxIiwianRpIjoiMjA5NmI1M2YxYTc3ZTg2NTM5YjI3NzExMTRiYjEyMTZiNGI5NWRhYTliZjFhYzE3ZTU5YTRiOTZkNTJmMTU3YzFkYzY0MzUwYTVmZjc4ODAiLCJpYXQiOjE1ODE4MzE3NDQsIm5iZiI6MTU4MTgzMTc0NCwiZXhwIjoxNjEzNDU0MTQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BkzvcCcKAKJ72D3oQOOFpicZ1ek4Dl2aOTJJhnc4hn-t6h2IzYocKgkcaDV_Ux2LJS01iVa1FoxKdiLjNi0vjReI6Liw3oJMD9xOs0uThb-QdiRLzCUGFdQpjr7ifTrOwcmLrGwa6XwrAtZ_cP3pw2QpLYzIaphCY77LQMwzEmSQ85nq2vEMTL852WlbqyCB2rfXhXYIF-tJF0D4Y2zQMIYpS3gU3Wy7OuZi0Ui-yFHKmFpqTo9IkaRrI8tcG7xGcvHAnIQbE9HYYLF421fieNxVLBq51_QA12KLhitbnwWLd5p5dhK4xVGyHza7LWkyDcdEfveoTLPTIyekx3of1RDXIW2x1-1DK6orL2M5E5Q04sh95-oQruze4aa4NqXq_2khdX9wnr9Uo_xAYEkLDrj53YV_i6BT2KWfT8Z-DsyBJycAnMkxthdjfVpgwp0Po-sspUsDYMMDhIiiYFjc42oRD16-jQLchy1O3O8Hd-o0uyxR8HoaCpkxzT6V0yVFr1d0P9Skg-fC2pZGfxdkEjN0DaZwkfsBqO4amPWCSyHNH0coFlkHgs_hm3R6w4IcMwIqsYRCNI4aTZP5n2UspkXv3ODmAuueZ38VZgVtHNcQ8C6PvnzusBv_T9Kmsm-Ncb1RV7tzGjMe1O2fty6YQNHa3SHcv5ruW-y67uk-C7o"
  const token = 'Bearer ' + token0
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
}



  return async function (dispatch) {

    
    await axios.put('http://store.ubhejanelabs.com/api/user', password, {
     headers:headers
    }).then(userDetails => {
      dispatch({
        type: UPDATE_USER,
        payload: userDetails.data.message,
      })
      dispatch({
        type: POST_SUCCESS,
        payload: userDetails.data.message,
           })

          })
          .catch(function (error) {
            console.log(error);
            dispatch({
                type:GET_ERRORS,
                payload: error
            })
          });
  
    }
}
  