"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/RandomQuote.module.css";
import axios from "axios";

const RandomQuote = () => {
  // setting the quote
  const [quote, setQuote] = useState("");

  //function to get the quote
  useEffect(() => {
    const getQuote = async () => {
      try {
        //checking if the quote is availble in localstorage or not
        const localData = localStorage.getItem("quoteValue");
        if (localData) {
          setQuote(localData);
        } else {
          //Getting the quote if the quote in localstorage is not avaiable
          const response = await axios.get(
            "https://api.quotable.io/random?tags=famous-quotes&maxLength=50"
          );
          const newQuote = response.data.content;
          setQuote(newQuote);
          localStorage.setItem("quoteValue", newQuote);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getQuote();
  }, []);

  return (
    <div className={styles.quoteCss}>
      <div className={styles.quoteContent}>{quote}</div>
    </div>
  );
};

export default RandomQuote;
