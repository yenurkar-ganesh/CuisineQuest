import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";


const Navbar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <ImSpoonKnife className={classes.brand_logo} />
        </div>

        <div className={classes.nav_btn}>
          <Link className={classes.nav_btn1} to="/">
  
            Home
          </Link>

          <Link className={classes.nav_btn1} to="/about">
            {" "}
            About
          </Link>

          <Link className={classes.nav_btn1} to="/contacts">
            {" "}
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
