
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Login from './Login';
import Signup from './Sinup';
import { Link } from "@mui/material";

const Navbar = () => {
  const [show,setShow]=useState(false);
    const [popup,setPopup]=useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  // const menuOptions = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "About",
  //     icon: <InfoIcon />,
  //   },
  //   {
  //     text: "Testimonials",
  //     icon: <CommentRoundedIcon />,
  //   },
  //   {
  //     text: "Cart",
  //     icon: <ShoppingCartRoundedIcon />,
  //   },
    
  // ];
  return (
    <>
    <nav>
      <div className="nav-logo-container">
        <h1 class='logo-goat'>Goat Airdops</h1>
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button  className="primary-button me-2" id='lk'  onClick={()=>{setShow(true)}} >Login</button>
        <button  className="primary-button" id='lk' onClick={()=>{setPopup(true)}}>Signup</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
       {<HiOutlineBars3/>&& <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            
          <ListItem  disablePadding>
                <Link to="#home" style={{textDecoration:"none",color:"inherit"}}>
                  <ListItemText >Home</ListItemText>
                </Link>
              </ListItem>

              <ListItem  disablePadding>
                <Link to="#categories" style={{textDecoration:"none",color:"inherit"}} >
                  <ListItemText>Categories</ListItemText>
                </Link>
              </ListItem>


              <ListItem  disablePadding>
                <Link  to="#about" style={{textDecoration:"none",color:"inherit"}} >
                  <ListItemText >About</ListItemText>
                </Link>
              </ListItem>

              <ListItem  disablePadding>
                <Link to="#contact" style={{textDecoration:"none",color:"inherit"}} >
                  <ListItemText >Contact</ListItemText>
                </Link>
              </ListItem>

              <ListItem  disablePadding>
                <ListItemButton onClick={()=>{setShow(true)}} >
                  <ListItemText >Login</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding>
                <ListItemButton onClick={()=>{setPopup(true)}} >
                  <ListItemText >Signup</ListItemText>
                </ListItemButton>
              </ListItem>
          
          </List>
          <Divider />
        </Box>
      </Drawer>}
   
    </nav>
    <Login 
     show={show}
     setShow={setShow}
     />
   <Signup
    popup={popup}
    setPopup={setPopup}/>
    </>
  );
};

export default Navbar;
