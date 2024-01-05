"use client";
import React, { useEffect, useState } from "react";
import styles from  "../styles/Clock.module.css";

const Clock = ({clockHours, clockMinutes}) => {
  //Saving hours and minutes outside the useeffect
  const [getHours, setgetHours] = useState(null);
  const [getMinutes, setgetMinutes] = useState(null);

  useEffect(() => {
    function updateTime() {
      const windowTime = new Date();

      const hours = windowTime.getHours();
      const minutes = windowTime.getMinutes().toString().padStart(2, '0');;

      setgetHours(hours);
      setgetMinutes(minutes);

      clockHours(hours)
      clockMinutes(minutes)
    }

    updateTime();

    const timeInterval = setInterval(updateTime, 6000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={styles.ClockCss}>
      {getHours}:{getMinutes}
    </div>
  );
};

export default Clock;
