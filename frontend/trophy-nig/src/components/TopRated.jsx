import React from "react";
import styles from "./Feature.module.css";
import cn from "classnames";
import Carousel from "./Carousel";

const TopRated = () => {
  const properties = [
    {
      id: 1,
      img: "https://images.nigeriapropertycentre.com/properties/images/thumbs/981798/060d855a3ac127-mini-flat-one-bedroom-pent-floor-mini-flats-short-let-lekki-phase-1-lekki-lagos.JPG",
      name: "Mapkson Gardenia",
      builder: "Mapkson Builders",
      add: "Greater Kailash, Delhi",
      dim: "N 2,500,000/sq ft",
      bed: 3,
      bath: 2,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
    {
      id: 2,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shortelt-2.jpeg",
      name: "Mapkson Gardenia",
      builder: "Mapkson Builders",
      add: "Greater Kailash, Delhi",
      dim: "N 2,500,000/sq ft",
      bed: 3,
      bath: 2,
      developer: "Managed by JR Developers",
      deal: "For Rent",
    },
    {
      id: 3,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shorlet-11.jpeg",
      name: "Mapkson Gardenia",
      builder: "Mapkson Builders",
      add: "Greater Kailash, Delhi",
      dim: "N 2,500,000/sq ft",
      bed: 4,
      bath: 3,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
  ];
  return (
    <div className={styles.feature_container}>
      <div className={cn(styles.featureHead, "pt-[2.5rem] pb-4")}>
        <h1 className="text-center font-sans font-semibold text-[#10c66f] text-[3vw]">
          TOP RATED PROPERTIES
        </h1>
      </div>
      <div
        className={cn(
          "text-center text-[1.2vw] text-[#665D7D] pt-2 pb-5 px-8",
          styles.titletext
        )}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        delectus, facilis perspiciatis ea rem veritatis pariatur cumque in,
        sapiente iure fuga, fugiat quam reiciendis necessitatibus expedita. Vero
        rerum asperiores quam.
      </div>

      <div className="flex border shadow-2xl justify-between items-center h-64 gap-6">
        {properties?.map((item) => (
          <div className="flex justify-between w-[30%] h-[100%] bg-gray-200 border border-red-600">
            <div className="w-[40%] h-[100%] image-container">
              <img
                className="w-[90%] h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <div className="w-[100%] bg-[EFEFEF]">
              <div className="font-bold">{item.name}</div>
              <div className="text-[0.8rem]">{item.builder}</div>
              <div className="font-bold text-[#10C66F] text-[0.9rem] leading-[1.5rem]">
                {item.add}
              </div>
              <div className={cn()}>
                <span className="font-bold">{item.bed}</span> Bed{" "}
                <span className="font-bold">{item.bath}</span> bath
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
