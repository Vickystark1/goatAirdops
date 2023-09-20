
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Login from './Login';
import Sinup from './Sinup';


const Navbar = () => {
  const [show,setShow]=useState(false);
    const [popup,setPopup]=useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
    
  ];
  return (
    <>
    <nav>
      <div className="nav-logo-container">
        <a><h1 class='logo-goat'>Goat Airdops</h1></a>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Categories</a>
        <a href="">About</a>
        <a href="">Contacts</a>
        <a className="primary-button" id='lk'  onClick={()=>{setShow(true)}} >Login</a>
        <a className="primary-button" id='lk' onClick={()=>{setPopup(true)}}>Singup</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    <Login 
     show={show}
     setShow={setShow}
     />
   <Sinup
    popup={popup}
    setPopup={setPopup}
   />
    </>
  );
};

export default Navbar;
