import React from "react";
import styles from "./Feature.module.css";
import cn from "classnames";
import Carousel from "./Carousel";

const Feature = () => {
  return (
    <div className={styles.feature_container}>
      <div className={styles.featureHead}>
        <h1>Featured Properties</h1>
      </div>
      <div className={cn("text-center")}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        repellendus, tempore reiciendis illum rem nisi ullam perspiciatis
        necessitatibus similique provident.
      </div>
      <Carousel />
    </div>
  );
};

export default Feature;
