import React from "react";
import styles from "../styles/Bg_Info.module.css";

const Bg_Info = ({ imageData }) => {
  console.log(imageData)
    return (
    <div className={styles.Bg_InfoCss}>
      {imageData?.results[0]?.user?.location}
    </div>
  );
};

export default Bg_Info;
