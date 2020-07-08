import { FETCH_PRODUCTS, NEW_PRODUCT, DELETE_PRODUCT, GET_ERRORS, POST_SUCCESS, DELETE_SUCCESS } from './types';
import axios from 'axios'



export function fetchProducts() {

  console.log("fetch products")

  return async function (dispatch) {
  
    
    await axios.get("https://store.ubhejanelabs.com/api/products")  
      .then(products => {
        console.log("inside");
        dispatch({
          type: FETCH_PRODUCTS,
          payload: products.data
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



export function newProduct(product) {

const token0 =localStorage.getItem('access_token')?localStorage.getItem('access_token'):'fail'//"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwOTZiNTNmMWE3N2U4NjUzOWIyNzcxMTE0YmIxMjE2YjRiOTVkYWE5YmYxYWMxN2U1OWE0Yjk2ZDUyZjE1N2MxZGM2NDM1MGE1ZmY3ODgwIn0.eyJhdWQiOiIxIiwianRpIjoiMjA5NmI1M2YxYTc3ZTg2NTM5YjI3NzExMTRiYjEyMTZiNGI5NWRhYTliZjFhYzE3ZTU5YTRiOTZkNTJmMTU3YzFkYzY0MzUwYTVmZjc4ODAiLCJpYXQiOjE1ODE4MzE3NDQsIm5iZiI6MTU4MTgzMTc0NCwiZXhwIjoxNjEzNDU0MTQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BkzvcCcKAKJ72D3oQOOFpicZ1ek4Dl2aOTJJhnc4hn-t6h2IzYocKgkcaDV_Ux2LJS01iVa1FoxKdiLjNi0vjReI6Liw3oJMD9xOs0uThb-QdiRLzCUGFdQpjr7ifTrOwcmLrGwa6XwrAtZ_cP3pw2QpLYzIaphCY77LQMwzEmSQ85nq2vEMTL852WlbqyCB2rfXhXYIF-tJF0D4Y2zQMIYpS3gU3Wy7OuZi0Ui-yFHKmFpqTo9IkaRrI8tcG7xGcvHAnIQbE9HYYLF421fieNxVLBq51_QA12KLhitbnwWLd5p5dhK4xVGyHza7LWkyDcdEfveoTLPTIyekx3of1RDXIW2x1-1DK6orL2M5E5Q04sh95-oQruze4aa4NqXq_2khdX9wnr9Uo_xAYEkLDrj53YV_i6BT2KWfT8Z-DsyBJycAnMkxthdjfVpgwp0Po-sspUsDYMMDhIiiYFjc42oRD16-jQLchy1O3O8Hd-o0uyxR8HoaCpkxzT6V0yVFr1d0P9Skg-fC2pZGfxdkEjN0DaZwkfsBqO4amPWCSyHNH0coFlkHgs_hm3R6w4IcMwIqsYRCNI4aTZP5n2UspkXv3ODmAuueZ38VZgVtHNcQ8C6PvnzusBv_T9Kmsm-Ncb1RV7tzGjMe1O2fty6YQNHa3SHcv5ruW-y67uk-C7o"
  const token = 'Bearer ' + token0
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
}



return async function (dispatch) {

    
    await axios.post('https://store.ubhejanelabs.com/api/product', product, {
     headers:headers
    }).then(product => {

      if (product.data.error) {
        dispatch({
          type:GET_ERRORS,
          payload: product.data.error
      })
      }
      else {

        dispatch({
          type: NEW_PRODUCT,
          payload: product.data
        })

        dispatch({
          type: POST_SUCCESS,
        })
        
      }
     
    }
    
    ) 
    .catch(function (error) {
      console.log(error);
      dispatch({
          type:GET_ERRORS,
          payload: error
      })
    });

  }
}


export function deleteProduct(id) {
   

  const token0 =localStorage.getItem('access_token')?localStorage.getItem('access_token'):'fail'//"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwOTZiNTNmMWE3N2U4NjUzOWIyNzcxMTE0YmIxMjE2YjRiOTVkYWE5YmYxYWMxN2U1OWE0Yjk2ZDUyZjE1N2MxZGM2NDM1MGE1ZmY3ODgwIn0.eyJhdWQiOiIxIiwianRpIjoiMjA5NmI1M2YxYTc3ZTg2NTM5YjI3NzExMTRiYjEyMTZiNGI5NWRhYTliZjFhYzE3ZTU5YTRiOTZkNTJmMTU3YzFkYzY0MzUwYTVmZjc4ODAiLCJpYXQiOjE1ODE4MzE3NDQsIm5iZiI6MTU4MTgzMTc0NCwiZXhwIjoxNjEzNDU0MTQ0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BkzvcCcKAKJ72D3oQOOFpicZ1ek4Dl2aOTJJhnc4hn-t6h2IzYocKgkcaDV_Ux2LJS01iVa1FoxKdiLjNi0vjReI6Liw3oJMD9xOs0uThb-QdiRLzCUGFdQpjr7ifTrOwcmLrGwa6XwrAtZ_cP3pw2QpLYzIaphCY77LQMwzEmSQ85nq2vEMTL852WlbqyCB2rfXhXYIF-tJF0D4Y2zQMIYpS3gU3Wy7OuZi0Ui-yFHKmFpqTo9IkaRrI8tcG7xGcvHAnIQbE9HYYLF421fieNxVLBq51_QA12KLhitbnwWLd5p5dhK4xVGyHza7LWkyDcdEfveoTLPTIyekx3of1RDXIW2x1-1DK6orL2M5E5Q04sh95-oQruze4aa4NqXq_2khdX9wnr9Uo_xAYEkLDrj53YV_i6BT2KWfT8Z-DsyBJycAnMkxthdjfVpgwp0Po-sspUsDYMMDhIiiYFjc42oRD16-jQLchy1O3O8Hd-o0uyxR8HoaCpkxzT6V0yVFr1d0P9Skg-fC2pZGfxdkEjN0DaZwkfsBqO4amPWCSyHNH0coFlkHgs_hm3R6w4IcMwIqsYRCNI4aTZP5n2UspkXv3ODmAuueZ38VZgVtHNcQ8C6PvnzusBv_T9Kmsm-Ncb1RV7tzGjMe1O2fty6YQNHa3SHcv5ruW-y67uk-C7o"
  const token = 'Bearer ' + token0
   

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
}



return async function (dispatch) {

    
    await axios.delete('https://store.ubhejanelabs.com/api/product'+id, {
     headers:headers
    })
      .then(product => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: product.data
        })
        dispatch({
          type: DELETE_SUCCESS,
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

