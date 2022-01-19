import React, {  useState } from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collapse,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";







const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Video Lec",
      path: "/videoLec",
    },
    {
      name: "Notes",
      path: "/notes",
    },
    {
      name: "Mock Test",
      path: "/mockk_test",
    },
    {
      name: "About Us",
      path: "/about_us",
    },
  ];
  return (
    <>
      <main role="main">
        <nav className="navMainDiv">
          <div className="navContHolder">
            <section className="navLogo">
              <Avatar alt="logo" src={logo} />
            </section>
            <section className="navMenu">
              <IconButton
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                <MenuIcon htmlColor="white" />
              </IconButton>
            </section>
            <section className="navLinks">
              <div className="navLinksCont">
                {pages.map((val) => {
                  return <NavLink key={val.path} to={val.path}>{val.name}</NavLink>;
                })}
              </div>
            </section>
            <section className="navLoginDiv">
              <div className="navLogSign">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signin">Sign</NavLink> 
              </div>
              <div className="navProfile">
                <Avatar alt="profile" />
              </div>  
            </section>
          </div>
          <Collapse in={drop} timeout="auto" unmountOnExit>
            {pages.map((val) => {
              return (
                <div key={val.path} className="navCollapseDiv">
                  <NavLink exact to={val.path}>
                    {val.name}
                  </NavLink>
                </div>
              );
            })}
          </Collapse>
        </nav>
      </main>
    </>
  );
};
export default Navbar;
