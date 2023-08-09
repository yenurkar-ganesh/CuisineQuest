import React from "react";
import classes from "./Header.module.css";
import Navbar from "../Navbar/Navbar";



const Header = () => {
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundImage: `url(/images/edgar-castrejon-bG5rhvRH0JM-unsplash.jpg)`,
        }}
      >
        <Navbar />

        <div className={classes.header_text}>
          <h1>CuisineQuest</h1>
          <p>Embark on a Gourmet Odyssey with CuisineQuest...</p>
        </div>
      </div>
    </>
  );
};

export default Header;
