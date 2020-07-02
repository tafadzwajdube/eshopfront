import { container, title } from "../../../material-kit-react.js";
import headerLinksStyle from "../../components/headerLinksStyle.js";

const navbarsStyle = theme => ({

  myCard: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  myGridHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    //minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit",
    //backgroundColor:"purple"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  },
  myLinks: {
    color: 'white',
    textTransform: 'none !important',
    textDecoration: 'none', 
    fontWeight: 'normal',
  },
  
  myLinks2: {
    color: '#474343',
    textTransform: 'none !important',
    textDecoration: 'none', 
    fontWeight: 'normal',
},
});

export default navbarsStyle;
