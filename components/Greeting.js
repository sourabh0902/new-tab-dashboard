"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Greeting.module.css";

const Greeting = ({ Hours }) => {
  //Variables for declaring morning, afternoon and evening
  const hours = Hours;
  const morningHour = 6;
  const afternoonHour = 12;
  const eveningHour = 18;

  //state management for setting the time of the day
  const [timeOfDay, settimeOfDay] = useState("");

  //Storing the name to be displayed
  const [storedName, setStoredName] = useState("");

  //Function for declaring time of the day according to Hour.
  useEffect(() => {
    if (hours >= morningHour && hours < afternoonHour) {
      settimeOfDay("morning");
    } else if (hours >= afternoonHour && hours < eveningHour) {
      settimeOfDay("afternoon");
    } else if (hours >= eveningHour || hours < morningHour) {
      settimeOfDay("evening");
    }

    const localName = localStorage.getItem("name");
    if (localName) {
      setStoredName(localName);
    }
  }, [hours, storedName]);

  return (
    <div className={styles.greetingCss}>
      Good {timeOfDay}, {storedName}
    </div>
  );
};

export default Greeting;
