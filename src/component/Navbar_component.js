import React from "react";
import styles from "./Navbar_component.module.css";
import data from "./Data.json"

export default function Navbar_component() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_inner_container1}>
        <img src={data.nav_image_url} alt="my assignment" />
        <div className={styles.vertical}></div>
        <p>{data.nav_heading1}</p>
      </div>
      <div className={styles.navbar_inner_container2}>
        <button>{data.nav_heading2}</button>
      </div>
    </div>
  );
}
