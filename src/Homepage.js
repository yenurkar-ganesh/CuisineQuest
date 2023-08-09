import React, {useState} from 'react';
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

const Homepage = () => {
  const [loader, setLoader] = useState(true);

  return (
    <div className="main">
    <Header />

    {loader && (
      <div className="loader">
        <div className="spinner"></div>
        <h1 className="loader-text">
          `Feast Your Eyes, Feed Your Soul: Culinary Bliss Incoming!`
        </h1>
      </div>
    )}
    
    <RecipeList setLoader={setLoader} />
  </div>
  )
}

export default Homepage