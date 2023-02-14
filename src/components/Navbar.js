import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import image from "../assets/image.png";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../context/AuthContext";

const pages = ["Yapim", "contact", "products"];
const settings = ["Kayit Ol", "Giriş Yap"];
const settings2 = ["Profile", "Çikiş Yap"];

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#222831",position:"fixed",top:"0",zIndex:10,
    height:{
      xs:"4rem",
      md:"8rem",
    } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <NavLink   to="/">
              <Box 
              component="img"
              sx={{
                maxWidth:"200px",
                borderRadius:"10px",
                margin:"1rem"

                
              }} src={image} alt="" />
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }  }}>
            <IconButton
              sx={{
                width:"5rem",
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={"/" + page.toLocaleLowerCase()}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ textDecarotion: "none", color: "white" }}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {page}
                  </Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <NavLink
                  to={"/" + page.toLocaleLowerCase()}
                  sx={{ textDecarotion: "none", color: "Black" }}
                >
                  {page}
                </NavLink>
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label="cart"
            sx={{ marginRight: "10px" }}
            onClick={() => navigate("/basket")}
          >
            {/* <StyledBadge badgeContent={count} sx={{ color: "white" }}> */}
            {/* <ShoppingCartIcon /> */}
            {/* </StyledBadge> */}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "white" }}
              >
                {currentUser ? (
                  currentUser.email[0].toUpperCase()
                ) : (
                  <AccountCircleIcon />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser
                ? settings2.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={(e) => handleCloseUserMenu(e)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))
                : settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={(e) => handleCloseUserMenu(e)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//         <NavLink to="/">Fraternity</NavLink>
//         {/* <NavLink to="/">Home</NavLink> */}
//         {/* <NavLink to="/register">Register</NavLink> */}
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/product">Products</NavLink>
//         <NavLink to="/basket">Basket</NavLink>
//     </div>
//   )
// }
// export default Navbar
