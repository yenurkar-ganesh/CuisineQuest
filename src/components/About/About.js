import React from "react";
import classes from "./About.module.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={classes.about_container}>
        <div className={classes.about_header}>
          <h1>About CuisineQuest: </h1>
          <p>
            Welcome to CuisineQuest, where culinary exploration knows no bounds!
            We are your ultimate destination for an exquisite gastronomic
            journey that will delight and enchant your senses. Our passion for
            food and the art of cooking has driven us to curate a treasure trove
            of delectable recipes, inspired by flavors from around the world.
          </p>
        </div>

        <div
          className={classes.bg_logo}
          style={{
            backgroundImage: `url(/images/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg)`,
          }}
        ></div>
      </div>

      <div className={classes.info}>
        <div className={classes.we_offers}>
          <h3>What We Offer:</h3>
          <p>
            🍽️ A Culinary Wonderland: Explore our vast collection of carefully
            curated recipes, thoughtfully designed to cater to all tastes and
            skill levels. From comforting classics to innovative delights,
            there's something to satisfy every craving.
          </p>{" "}
          <p>
            🌍 Global Flavors: Immerse yourself in a diverse array of cuisines,
            as we take you on a virtual journey around the globe. Experience the
            richness of flavors from different cultures, all in the comfort of
            your kitchen.
          </p>
          <p>
            📸 Mouthwatering Visuals: Each recipe is beautifully presented with
            high-quality images, tempting you to step into the world of flavors
            before you even start cooking.
          </p>
        </div>

        <div className={classes.about_header}>
          <h3>Embrace Your Inner Foodie</h3>
          <p>
            At CuisineQuest, we invite you to embrace your inner foodie and
            embark on a flavorful journey that will elevate your cooking
            adventures. Whether you're a seasoned cook or just starting, our
            platform is designed to cater to all, empowering you to create and
            savor the magic of food.
          </p>
          
          <h3>Unleash Your Culinary Curiosity</h3>

          <p>
            So, what are you waiting for? Unleash your culinary curiosity and
            begin your gourmet odyssey with us at CuisineQuest. Let the flavors
            of the world awaken your senses, and together, let's celebrate the
            joy of cooking and sharing delicious moments with loved ones. Bon
            appétit! 🍽️
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
