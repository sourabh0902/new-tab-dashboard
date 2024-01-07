import React, { useEffect, useState } from "react";
import styles from "../styles/Clock.module.css";

const Clock = ({ clockHours, clockMinutes }) => {
  //Saving hours and minutes outside the useeffect
  const [getHours, setgetHours] = useState(null);
  const [getMinutes, setgetMinutes] = useState(null);

  //Saving Date outside the useeffect
  const [getDate, setgetDate] = useState(null);

  useEffect(() => {
    function updateTime() {
      const windowTime = new Date();

      const year = windowTime.getFullYear();
      const month = (windowTime.getMonth() + 1).toString().padStart(1);
      const day = windowTime.getDate().toString().padStart(1);

      const formattedDate = `${day}/${month}/${year}`;
      setgetDate(formattedDate);

      const hours = windowTime.getHours();
      const minutes = windowTime.getMinutes().toString().padStart(2, "0");

      setgetHours(hours);
      setgetMinutes(minutes);

      clockHours(hours);
      clockMinutes(minutes);
    }

    updateTime();

    const timeInterval = setInterval(updateTime, 30000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={styles.ClockCss}>
      <div className={styles.DateCss}>
        {getDate}
      </div>
      <div className={styles.TimeCss}>
        {getHours}:{getMinutes}
      </div>
    </div>
  );
};

export default Clock;
