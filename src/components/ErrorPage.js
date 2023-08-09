import React from "react";
import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <>
      <div className={classes.went_wrong}>
        <img 
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*zJ3sA4LbvcKen1N7.jpg"
          alt="something went wrong"
        />
        <h1>There is Something went Wrong</h1>
        <h2>PAGE NOT FOUND</h2>
      </div>
    </>
  );
};

export default ErrorPage;
