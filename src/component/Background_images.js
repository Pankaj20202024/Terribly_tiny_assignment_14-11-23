import React from "react";
import styles from "./Background_image.module.css";
import data from "./Data.json";

export default function Background_images() {
  return (
    <div className={styles.BackgroundImages}>
      <img src={data.background_image_url} alt="my assignment" />
    </div>
  );
}
