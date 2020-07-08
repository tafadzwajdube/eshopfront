import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Header from "./components/Header/Header.js";
import CustomInput from "./components/CustomInput/CustomInput.js";
import CustomDropdown from "./components/CustomDropdown/CustomDropdown.js";
import Button from "./components/CustomButtons/Button.js";

import image from "../assets/img/bg.jpg";
import profileImage from "../assets/img/faces/avatar.jpg";

import styles from "../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import { Toolbar } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';
import { connect, useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions'
import { withRouter } from 'react-router';

const useStyles = makeStyles(styles);

function NavBar(props) {


  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


//drop down menu

const handleMenu = event => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout(() => {
      props.history.push('/')
  }));
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header
            brand="e-shop"
            color="dark"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={classes.notificationNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                  >
                    <Email className={classes.icons} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff",
                      "Sign out"
                    ]}
                  />
                </ListItem>
              </List>
            }
        
        mobileLinks={
          <List className={classes.list}>
          <ListItem className={classes.listItem}>
          <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          edge="end"    
        >
          <SettingsIcon />
            </IconButton>
          
    
        <Menu
          id="menu-appbar"
          elevation={0}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          onClose={handleClose}
              >
                <Router  basename="/mystore"/>
                <MenuItem onClick={handleClose}><NavLink style={{
                  color: 'black',
                  textTransform: 'none !important',
                  textDecoration: 'none',
                  fontWeight: 'normal'
                }}
                  to="/productmanager" color="inherit">Product Manager</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>Sales Manager</MenuItem>
                <MenuItem onClick={handleClose}>
                <NavLink style={{
                  color: 'black',
                  textTransform: 'none !important',
                  textDecoration: 'none',
                  fontWeight: 'normal'
                }}to="/inventorymanager" color="inherit">Inventory Manager</NavLink></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
             
              
              </Menu>
            </ListItem>
            </List>

        }
      />

      
      </React.Fragment>

      
      
  );
}
export default withRouter(NavBar)