import React, { useEffect, useState } from "react";
import styles from "../styles/Name_modal.module.css";

const Name_modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (!storedName) {
      setIsOpen(true);
    } else {
      setName(storedName);
    }
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    // alert(`Hello, ${name}!`);
    setIsOpen(false);

    window.location.reload();
  };

  return (
    <div>
      {/* <button onClick={togglePopup}>Open Popup</button> */}
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popup_content}>
            <span className={styles.close} onClick={togglePopup}>
              &times;
            </span>
            <h2>Please Enter Your Name</h2>
            <form className={styles.modal_form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Name_modal;
