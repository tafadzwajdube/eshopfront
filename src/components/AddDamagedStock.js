import React, {useState,useEffect} from "react";
import Navbar from "./NavBar.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import GridContainer from "./components/Grid/GridContainer.js";
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { connect, useSelector, useDispatch } from 'react-redux';
import { newDamagedStock } from "../actions/stockActions";
import Alert from '@material-ui/lab/Alert'
import { clearErrors } from '../actions/errorActions'
import { fetchBrands } from "../actions/brandActions.js";


export default function AddDamagedStock() {
  const dispatch = useDispatch();

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        isNumericString
        prefix="R"
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '',
  });
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

    const [myRows, setRows] = useState(
        [ ]
   )

    const TAX_RATE = 0;

    /* const useStyles = makeStyles({
      table: {
        minWidth: 100,
      },
    }); */
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
           margin: theme.spacing(1),
            minWidth: 150,
          },
        table: {
            minWidth: 100,
          },
          paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
      }));
    
    function ccyFormat(num) {
      return `${num.toFixed(2)}`;
    }
    
    function priceRow(qty, unit) {
      return 1 * unit;
    }
    
    function createRow(desc, qty, unit) {
      const price = priceRow(qty, unit);
      return { desc, qty, unit, price };
    }
    
    function subtotal(items) {
      return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }
    
    const rows = [
      createRow('Paperclipsee  (Box)', 100, 1.15),
      createRow('Paper (Case)', 10, 45.99),
      createRow('Waste Basket', 2, 17.99),
    ];
    
    const invoiceSubtotal = subtotal(myRows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;


    const classes = useStyles();

    const [state, setState] = React.useState({
        category: '',
        product: '',
        brand: '',
        quantity: '',
        unit_price: 10,
        mybrands: [],
      chosenbrand: {},
        cost:''
      });

      const products = useSelector(state => state.products.items)
      const categories = useSelector(state => state.categories.items)
    
      const [myerror,setErrors] = useState()
    const [open, setOpen] = React.useState(false);
    const [x, setX] = React.useState(1);

    useEffect(() => {
      const timer = setTimeout(() => {
        dispatch(clearErrors())
        
      }, 5000);
      return () => clearTimeout(timer);
    }, [x])
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const addItem = () => {
    console.log('cost')
    console.log(state.cost)
    
    if (state.category != '' &&
      state.productID != '' &&
      state.brand != '' &&
      state.myunitcost!=''&&
      state.quantity != '') {
      var xrows = myRows;
      const cbrand = state.chosenbrand
      const price = priceRow(state.quantity, state.cost);
      const myunitcost = state.cost / state.quantity;
      xrows.push({ product_id: state.myproductid, id: cbrand.id, item: state.brand, quantity: state.quantity, unit: myunitcost, price: price });

      setRows(xrows);
      var d = x + 1;
      setX(d)
      setOpen(false);

      //clear state

      setState({
        ...state,
        ['category']: '',
        ['product']: '',
        ['brand']: '',
        ['mybrands']: [],
        ['chosenbrand']: {},
        ['cost']: '',
        ['quantity']: '',
        ['myproductid']: ''
      });
    }
    else {
      setErrors('All fields are required')
    }

    }

  
  const handleCost = (event) => {
    console.log(state.cost)
    const cost = event.target.value;
    setState({
      ...state,
      ['cost']: event.target.value,
    });
  }
    const handleChanged = (event) => {
   
        const name = event.target.name;
        const nameid=event.target.value
        setState({
          ...state,
          [name]: event.target.value,
        });
        if (event.target.name == 'product') {
            const myproduct = products.find(p => p.name == nameid);
            console.log(myproduct)
            setState({
                ...state,
              ['mybrands']: myproduct.brands,
                ['myproductid']:myproduct.id,
                [name]: event.target.value,
            });
          
            console.log(state.mybrands)
        }

        if (event.target.name == 'categoryxx') {
            const myproduct = products.find(p => p.name == nameid);
            console.log(myproduct)
            setState({
                ...state,
                ['mybrands']: myproduct.brands,
                [name]: event.target.value,
            });
          
            console.log(state.mybrands)
        }

        if (event.target.name == 'brand') {
            const thebrand = state.mybrands.find(b=> b.name == nameid);
            
            setState({
                ...state,
                ["chosenbrand"]: thebrand,
                [name]: event.target.value,
            });
          
            console.log(state.chosenbrand)
        }

      };
    
  
    const handleStock = () => {
     var items=[]
        myRows.map(row => {
            const item = {
                product_id:row.product_id,
                brand_id: row.id,
                quantity: row.quantity,
                unit_cost: row.unit,
                total_cost: row.price
                
                
            }
            items.push(item)
        } )
     const   stock = {
           products: items,
            total_price:invoiceTotal,
        }

        console.log(stock)
     dispatch(newDamagedStock(stock));
    //  dispatch(fetchBrands());
       

        setRows([])
    }
  
    const errors = useSelector(state => state.error.errors)
    const success = useSelector(state => state.error.success)
  
  const handleStockClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add Stock!'
    }).then((result) => {
      
      if (result.value){
      handleStock()
      if (errors) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: { errors }
        }
        ).then(
          //  
          console.log('helalsnn')
        )
      }
      else {
        Swal.fire(
          'Stock added!',
          'Stoke has been added.',
          'success'
        )
      }
            
    }
      })
    }
    
    const handleCancelStock = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "It will clear all added items!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Clear Stock!'
          }).then((result) => {
            if (result.value) {
                console.log('cancelled')
                setRows([])
              }
            
          })
  }
  
 
    

    return (

      <React.Fragment>
        <div style={{paddingLeft: '10px', paddingRight:'10px'}}>
<br></br>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Add Damaged item</Button>

            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {myRows.length < 1 ?
                            <TableRow>No items</TableRow>
                            :
    <React.Fragment>
                            {
                                myRows.map((row) => (
            <TableRow key={row.item}>
              <TableCell>{row.item}</TableCell>
                  <TableCell align="right">
                      <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center">
                          
                     <Grid
                      item>
                         <IconButton
                        size="small"
                         aria-label="add"
                         color="primary"
                              >
                      <AddIcon  />
                    </IconButton>      
                    </Grid>
                    <Grid
                    item>
                      
                      {row.quantity}        
                    </Grid>
                    <Grid
                    item>
                              <IconButton aria-label="remove"
                               color="secondary">
                        <RemoveIcon/>
                      </IconButton>                              
                    </Grid>
      

                     </Grid>
                      

                  </TableCell>
              <TableCell align="right">{ccyFormat(row.unit)}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
                            <TableCell rowSpan={3}>
                                <div>
                                    <Button
                                    style={{paddingTop:"3px", width:"90px"}}
                                    variant="contained"
                                                color="primary"
                                                onClick={handleStockClick}
                                    >
                                        Submit
                                    </Button> 
                                </div>    
                                <div style={{paddingTop:"3px", width:"50%"}}>
                                    <Button
                                    style={{paddingTop:"3px", width:"90px"}}
                                                variant="contained" color="secondary"
                                                onClick={handleCancelStock}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                           
                            </TableCell>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                            </React.Fragment>
                        }
        </TableBody>
                
      </Table>
            </TableContainer>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
                    <div className={classes.paper}>
              <form style={{ width: '250px' }}>
              {myerror&&<span style={{ color: 'red' }}>{myerror}</span>}
          <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select
                                    native
                                    value={state.category}
                                    onChange={handleChanged}
          inputProps={{
            name: 'category',
            id: 'category',
          }}
        >
                                    <option aria-label="None" value="" />
                                    {categories.map(category =>
                                    <option value={category.name}>{category.name}</option>
                                        )}

         
                            </Select>
                        </FormControl>
                <FormControl className={classes.formControl}>
        <InputLabel htmlFor="product">Product type</InputLabel>
        <Select
                                    native
                                    value={state.product}
                                    onChange={handleChanged}
          inputProps={{
            name: 'product',
            id: 'product',
          }}
                                >
                                     <option aria-label="None" value="" />
          {products.map(product =>
            <option value={product.name}>{product.name}</option>
                                        )}
                        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="brand">Brand</InputLabel>
        <Select
                                    native
                                    value={state.brand}
                                    onChange={handleChanged}
          inputProps={{
            name: 'brand',
            id: 'brand',
          }}
        >
          <option aria-label="None" value="" />
          {state.mybrands.map(brand =>
            <option value={brand.name}>{brand.name}</option>
                                        )}
                            </Select>
                            </FormControl>
                            
                
                <FormControl className={classes.formControl}>
                  
               <TextField
                    label="Total Cost"
                    name="cost"
                    onChange={handleCost}
                    value={state.cost}
                    type="number"
                  />        

        {/*         <TextField
        label="cost"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
                  /> */}
                  </FormControl> 
                            <FormControl className={classes.formControl}>
                      
                  <TextField
                    label="Quantity"
                    name="quantity"
                    value={state.quantity}
                                               onChange={handleChanged}
                                            style={{width:"60px"}}
                                            type="number"
                                            
                                />        
                   


                            
                            </FormControl>
                             
          
                            <br></br>
                            <Button
                                    style={{width:"90px"}}
                                    variant="contained"
                                color="primary"
                                onClick={addItem}
                                    >
                  Add
                            </Button>
                            <span style={{paddingLeft:"10px"}}></span>
                            <Button
                                    style={{paddingLeft:"3px", width:"90px"}}
                                    variant="contained"
                                color="secondary"
                                onClick={handleClose}
                                    >
                                        Cancel
                            </Button>
                          
                            </form>
                    </div>
                   
        </Fade>
      </Modal>
            

            
      </div>
        </React.Fragment>
    )
}