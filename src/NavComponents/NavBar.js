import './NavBar.css'
import { NavLink } from "react-router-dom";

import AppBar  from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton  from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem'
import {Button,makeStyles} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'

// import AddStudent from "../ShowStudComponent/AddStudent"

const useStyles =makeStyles({
    root:{
      marginLeft:'10px'
     
    
    }
  })
let NavBar=()=>{
    const classes=useStyles();
    return(
        <nav>
            {/* <NavLink to="/home">HOME</NavLink> */}
 <AppBar>
   <ToolBar>
     <IconButton>
       <MenuIcon/>

       {/* <Typography varient="h6" > My Theam</Typography> */}
       <MenuItem  >
                  
                <Button  variant='contained' color='primary' className={classes.root}> <NavLink className="navlink" to="/students/showall">SHOW STUDENTS</NavLink> </Button>  
                <Button variant='contained' color='primary' className={classes.root}>  <NavLink className="navlink" to="/students/add">ADD STUDENTS</NavLink> </Button>  
                  
                </MenuItem>
       
     </IconButton>
   </ToolBar>
 </AppBar>

        </nav>
    )
}

export default NavBar;