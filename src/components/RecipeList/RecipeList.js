import classes from "./RecipeList.module.css";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchData } from "../Service";

import { Button, Dialog, DialogActions } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { red } from "@mui/material/colors";

const RecipeList = (props) => {
  const [searchTerms, setSearchTerms] = useState("");
  const [query, setQuery] = useState("Massaman ");
  const [data, setData] = useState("");

  // dialog show state
  const [show, setShow] = useState(false);

  useEffect(() => {
      fetchData(query).then((response) => {
        setData(response);
        props.setLoader(false);
      });
  }, []);

  // WE CAN GET THE VALUE FROM INPUT BOX
  const changeHandler = (event) => {
    setSearchTerms(event.target.value);
  };

  // THEN help of this function we get
  // the recipe we want from input box
  // and if we click on search button
  // then we can get want we wrote it there
  function searchRecipe(searchQuery) {
    fetchData(searchQuery).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }

  return (
    <>
      {/* SEARCHBAR */}
      <div className={classes.card}>
        <div className={classes.card_info1}>
          <input
            className={classes.search}
            type="text"
            value={searchTerms}
            placeholder="Pasta, Burger, Salad,..."
            onChange={changeHandler}
          />

          <button
            className={classes.btn1}
            onClick={() => (searchRecipe(searchTerms), props.setLoader(true))}
          >
            <FiSearch />
          </button>
        </div>
        <h3 className={classes.card_text}>
          "Unleash Culinary Magic: Discover, & Savor!"
        </h3>
      </div>

      {/* DIALOG FOR RECIPE && RECIPE CARDS  */}
      <Dialog open={show}>
        {/* <DialogTitle sx={{color: 'gray'}}><h2>Ingredients</h2> </DialogTitle> */}
        <DialogContent>
          <table>
            <thead>
              <th>
                <h3>Recipe & Ingredients</h3>{" "}
              </th>
            </thead>
            <tbody>
              <p style={{ textAlign: `center` }}>
                Want the Exact results ? just then Follow the instructions with
                exact ingredients !
              </p>
              {data &&
                data.hits.map((item, index) => (
                  <>
                    <tr style={{ marginBottom: `10px` }} key={index}>
                      <td className={classes.dialog_rowData}>
                        {" "}
                        <p>{item.recipe.ingredientLines}</p>{" "}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "black",
              margin: "0px auto",
              width: "30%",
              backgroundColor: "red",
            }}
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* CARD  */}
      <div className={classes.list_container}>
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className={classes.cards}>
              <div className={classes.parent_card}>
                <div className={classes.child_card}>
                  <img src={item.recipe.image} alt={item.recipe.label} />
                </div>

                <div className={classes.card_info}>
                  <h2>{item.recipe.label}</h2>
                  <p>
                    Cuisine :{item.recipe.cuisineType} <br />
                    Diet Label :{item.recipe.dietLabels}
                  </p>
                </div>
              </div>

              <div className={classes.list_btns}>
                <button
                  onClick={() => setShow(true)}
                  className={classes.list_btn}
                >
                  Directions
                </button>
                <button
                  onClick={() => window.open(item.recipe.url)}
                  className={classes.list_btn}
                >
                  Complete Recipe{" "}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RecipeList;
