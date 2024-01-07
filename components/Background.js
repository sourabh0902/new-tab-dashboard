import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Background.module.css";
import Clock from "./Clock.js";
import Greeting from "./Greeting.js";
import RandomQuote from "./RandomQuote.js";
import Bg_Info from "./Bg_Info";

const Background = ({ imageData }) => {
  //Setting the custom searched Image in the URl
  const [backgroundSearch, setbackgroundSearch] = useState("terminator");

  //Saving the hours and minutes from the callback functions of hours and minutes
  const [callbakHours, setcallbakHours] = useState(null);
  const [callbakMinutes, setcallbakMinutes] = useState(null);

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
      style={{ backgroundImage: `url(${imageData?.results[0]?.urls?.full})` }}
    >
      <Clock clockHours={passingHours} clockMinutes={passingMinutes} />
      <Greeting Hours={callbakHours} Minutes={callbakMinutes} />
      <RandomQuote />
      <Bg_Info imageData={imageData} />
    </div>
  );
};

export default Background;
