import React from "react";
import styles from "./PlayStore.module.css";

const PlayStore = () => {
  return (
    <div className={styles.storeContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Download Trophy Nig. App</h1>
        <p className={styles.subtitle}>and never miss out any update</p>
        <div className={styles.features}>
          <p className={styles.feature}>
            <span className={styles.icon}>
              <i className="fa-solid fa-check" style={{ color: "#10c66f" }}></i>
            </span>
            Get to know about newly posted Properties as soon as they are posted
          </p>
          <p className={styles.feature}>
            <span className={styles.icon}>
              <i className="fa-solid fa-check" style={{ color: "#10c66f" }}></i>
            </span>
            Manage your Properties with ease and instant alerts about Properties
          </p>
        </div>
        <div className={styles.btn_Img_Container}>
          <div className={styles.btn_img}>
            <img className={styles.img} src="/googleplay.jpeg" alt="Google Play" />
          </div>
          <div className={styles.btn_img}>
            <img className={styles.img} src="/appstore.jpeg" alt="App Store" />
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/mobile.png" alt="Mobile" />
      </div>
    </div>
  );
};

export default PlayStore;
