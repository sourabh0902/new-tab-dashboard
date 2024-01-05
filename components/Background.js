import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Background.module.css";
import Clock from "./Clock.js";
import Greeting from "./Greeting.js";
import RandomQuote from "./RandomQuote.js";

const Background = ({ unsplash_key, API_URL }) => {
  //Saving the response from the API
  const [bgImage, setbgImage] = useState(null);
  //Just getting the first image from the result to use an bg image
  const bgImageUrl = bgImage?.results[0]?.urls?.full;

  //Setting the custom searched Image in the URl
  const [backgroundSearch, setbackgroundSearch] = useState("terminator");

  //Saving the hours and minutes from the callback functions of hours and minutes
  const [callbakHours, setcallbakHours] = useState(null);
  const [callbakMinutes, setcallbakMinutes] = useState(null);

  //populateImages function will always run
  useEffect(() => {
    //Function to hit the APi with the input and API key
    const populateImages = async () => {
      try {
        const response = await axios.get(
          `${API_URL}?query=${backgroundSearch}&page=1&per_page=1&orientation=landscape&client_id=${unsplash_key}`
        );
        setbgImage(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    populateImages();
  }, [backgroundSearch]);

  //Call back functions to save the minutes and hours passed from the Clock.js
  const passingHours = (data) => {
    setcallbakHours(data);
  };
  const passingMinutes = (data) => {
    setcallbakMinutes(data);
  };

  return (
    <div
      className={styles.backgroundCss}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Clock clockHours={passingHours} clockMinutes={passingMinutes} />
      <Greeting Hours={callbakHours} Minutes={callbakMinutes} />
      <RandomQuote />
    </div>
  );
};

export default Background;
