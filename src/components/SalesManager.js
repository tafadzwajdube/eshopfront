import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ViewSale from './ViewSale'
import { fetchSales } from '../actions/saleActions'
import { connect, useSelector, useDispatch } from 'react-redux';

export default function SalesManager() {
    

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetch sales")
    dispatch(fetchSales())
    
}, [])



    return (
    
        <div>
          <b> Sales Management</b>  <br></br><br></br>

           <Button> All </Button>
        <div>
          <ViewSale/>
            </div>
        </div>

)

}