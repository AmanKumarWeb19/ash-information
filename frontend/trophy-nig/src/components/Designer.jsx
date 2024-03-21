import React from "react";
import styles from "./Feature.module.css";
import cn from "classnames";
import Carousel from "./Carousel";
import DesignerCarousel from "./DesignCarousel";

const Designer = () => {
  

  return (
    <div className={styles.feature_container}>
      <div className={cn(styles.featureHead, "pt-[2.5rem] pb-4")}>
        <h1 className="text-center font-sans font-semibold text-[#10c66f] text-[3vw]">
          Meet our Designer
        </h1>
      </div>
      <div
        className={cn("text-center text-[1.2vw] text-[#665D7D] pt-2 pb-5 px-8",styles.titletext)}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        delectus, facilis perspiciatis ea rem veritatis pariatur cumque in,
        sapiente iure fuga, fugiat quam reiciendis necessitatibus expedita. Vero
        rerum asperiores quam.
      </div>
      <DesignerCarousel/>
    </div>
  );
};

export default Designer;
