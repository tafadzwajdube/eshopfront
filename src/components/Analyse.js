import React, { useState, useEffect } from 'react';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Typography, Grid, Card } from '@material-ui/core';
import { fetchSales } from '../actions/saleActions'
import { fetchStocks, fetchDamaged } from '../actions/stockActions'
import { connect, useSelector, useDispatch } from 'react-redux';


export default function Analyse() {
    
    const dispatch = useDispatch();
//const[projectedSA, setProjectedSA]=useState(0)
    useEffect(() => {
      console.log("fetch sales")
        dispatch(fetchSales())
        dispatch(fetchStocks())
        dispatch(fetchDamaged())
      
    }, [])
    
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }

    const sales = useSelector(state => state.sales.items)
    const damaged = useSelector(state => state.stocks.damaged_items)
    const stocks = useSelector(state => state.stocks.items)
    const brands = useSelector(state => state.brands.items)
    
    const totalSales = () => {
        let total=0;
        if(sales)sales.map(s =>
            total = total + s.total
        )
        
        return total
        
    }

    const totalDamaged= () => {
        
        let totalD=0;
        
        if(damaged)  damaged.map(d =>
            totalD = totalD + d.total
        )

        return totalD
        
    }

    const totalsr = () => {
        let totalD=0;
        if(sales)sales.map(s =>
            totalD = totalD + s.total
        )
        
        return totalD
        
    }

    const getAvailable = () => {
        
        let totalB = 0
       

       if(brands) brands.map(b =>
            totalB=totalB+(b.zim_price_rand*b.quantity)
        )
        return totalB;
    }

    const getAvailableS = () => {
        
        let totalB = 0
        if(brands)  brands.map(b =>
            totalB = totalB + (b.sa_price*b.quantity)
        )

        const f = totalB * (40 / 100)
        const mh = { prices: totalB, total: totalB + f }
       // setProjectedSA(f)
      return mh
    }

   

    return (
        
        <React.Fragment>
            <div style={{paddingLeft:'10px', paddingRight:'10px'}}> 
                <Typography variant='h5'>
               Reports
            </Typography> <br></br>
            <Grid
                    container
                spacing={1}
                >

            <Grid
                        item
                        xs={12}
                        style={{paddingLeft:'30px', paddingRight:'30px'}}
                    >
                        <Card
                            style={{ padding: '10px', backgroundColor:'#99ccff' }}
                            variant="outlined"
                        >
                            <Typography>
                            Sales to date:  R{ccyFormat(totalSales())}
                            </Typography>
                        </Card>
                      
            </Grid>
                    
            <Grid
                        item
                        xs={12}
                        style={{paddingLeft:'30px', paddingRight:'30px'}}
                    >
                        <Card
                            style={{ padding: '10px', backgroundColor:'#99ccff' }}
                        variant="outlined">
                            <Typography>
                            Products Value in Zim:   R{ccyFormat(getAvailable())} 
                            </Typography>
                            <hr></hr>
                            <Typography>
                            Products Value in SA: R{ccyFormat(getAvailableS().prices)} 
                                <br></br>
                            SA With trans : R{ccyFormat(getAvailableS().total)} 

                            </Typography>
                           
                        </Card>
                        
            </Grid>
                    
            <Grid
                        item
                        xs={12}
                        style={{paddingLeft:'30px', paddingRight:'30px'}}
                    >
                        <Card style={{ padding: '10px', backgroundColor:'#99ccff' }}
                            variant="outlined"
                            
                        >
                            <Typography>
                            Loses from Damage: R{ccyFormat(totalDamaged())}
                            </Typography>
                       
                        </Card> 
            </Grid>

                </Grid>
                </div>

        </React.Fragment>
    )
}