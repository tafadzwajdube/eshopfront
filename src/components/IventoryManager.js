import React, { useEffect, useState } from 'react';
import AddDamagedStock from './AddDamagedStock';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchBrands } from '../actions/brandActions'
import { fetchStocks, fetchDamaged } from '../actions/stockActions'
import { Button, colors } from '@material-ui/core';
import ViewStock from './ViewStock'
import ViewDamaged from './ViewDamagedStock'

export default function InventoryManager(){
   
    const [page, setPage] = useState('vs')
    
    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch(fetchStocks());
        dispatch(fetchDamaged());
      
      
    }, [])
    
    const view = (myview) => {
        
    setPage(myview)
        
        {console.log(myview)}
    }

    return (
        
        <React.Fragment>
            

            <Button
                name='vs'
                size="medium"
                onClick={() => view('vs')}
                style={{color:'#1aa3ff',fontSize:"12px"}}
            >
                View Stock
            </Button> 
            <Button
                name='vd'
                size="medium"
                onClick={() => view('vd')}
                style={{color:'#1aa3ff',fontSize:"12px"}}
            >
                View Damaged
            </Button> 
            <Button
                name='ad'
                size="medium"
                onClick={() => view('ad')}
                style={{color:'#1aa3ff', fontSize:"12px"}}
            >
                Add Damaged
            </Button>
            
            
            {page == 'ad' && <AddDamagedStock />}
            {page == 'vs' && <ViewStock/>}
            {page=='vd'&&<ViewDamaged />}
            
        </React.Fragment>
    )
}