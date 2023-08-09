import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Contacts.module.css";
import { ImSpoonKnife } from "react-icons/im";
import { TextField, FormControl, Button } from "@mui/material";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: `38px`, fontWeight: `600`, textAlign: `center` }}>
        Contact us
      </h1>
      <div className={classes.contacts}>
        <div
          className={classes.left_side}
          style={{
            backgroundImage: `url(/images/brooke-lark-HlNcigvUi4Q-unsplash.jpg)`,
          }}
        ></div>

        {/* ------------- FORM -------------- */}

        <div className={classes.right_side}>
          <FormControl autoComplete="off" className={classes.form}>
            <h2>Contact Form</h2>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Enter Ful Name"
              // onChange={(e) => setFirstName(e.target.value)}
              // value={firstName}
              fullWidth
              required
              sx={{ mb: 4 }}
            />

            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Enter your email"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />

            <textarea
              rows="6"
              placeholder="Enter message"
              name="message"
              required
              style={{ marginBottom: `4rem` }}
            ></textarea>

            <Button
              sx={{ backgroundColor: "black", color: "white", border: "none" }}
              variant="outlined"
              color="secondary"
              type="submit"
            >
              Send
            </Button>
          </FormControl>
        </div>
      </div>

      <div className={classes.loader}>
        <ImSpoonKnife className={classes.spinner} />
      </div>
    </>
  );
};

export default Contacts;
