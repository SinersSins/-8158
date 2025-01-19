/** @format */

import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div id={styles.left}>
          <div>
            <h1 id={styles.name}>Snack & Steer</h1>
          </div>
        </div>
        <div id={styles.right}>
          <p>Login</p>
          <p>Signup</p>
          <p>food</p>
          <p>Contact</p>
          <button className={styles.sayhellobutton}>
            <i className={styles.fasfacomment}></i> User Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
