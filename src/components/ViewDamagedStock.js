import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { connect, useSelector, useDispatch } from 'react-redux';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function ccyFormat(num) {
  const mynum =parseFloat(num)
  return `${mynum.toFixed(2)}`;
}

function Row(props) {

 
  
 

  //MyRows.map
  const { row } = props;
  const { products } = props;
  const { brands } = props;
  
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const find = (id) => {
  
    const p = products.find(p => p.id == id);
    return p.name
}

  
const findB = (id) => {
  
  const b = brands.find(b => b.id == id);
  return b.name
  }
  
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell >{row.created_at}</TableCell>
        <TableCell >{row.user_name}</TableCell>
        <TableCell >{ccyFormat(row.total)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h7" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell >Product </TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell >Total Cost </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell >
                        {find(product.product_id)}
                      </TableCell>
                      <TableCell >
                        {findB(product.brand_id)}
                      </TableCell>
                      <TableCell>
                        {product.quantity}
                      </TableCell>
                      <TableCell>
                        {ccyFormat(product.total_price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {

  const damaged = useSelector(state => state.stocks.damaged_items)
  const products = useSelector(state => state.products.items)
  const brands=useSelector(state => state.brands.items)
  //const MyRows = sales;

  return (
    <TableContainer component={Paper}>
      <span style={{paddingLeft:'10px' }}><b>Damaged Stock</b></span>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell >By</TableCell>
            <TableCell >Total</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {damaged.map((d) => (
            <Row key={d.id} row={d} brands={brands} products={products} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
