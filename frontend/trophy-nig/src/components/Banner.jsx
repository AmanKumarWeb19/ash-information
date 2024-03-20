// Banner.js

import React from "react";
import "./Banner.css"; // Import CSS file

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="image-container">
        <img
          className="banner-image"
          src="https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2023/02/21093741/Pros-and-Cons-of-Living-in-Villas-_-Cover-21-2-23.jpg"
          alt=""
        />
      </div>

      <div className="text-container">
        <div className="divider"></div>
        <div>
          <p>We are Offering the</p>
        </div>

        <div className="content">
          <h1 className="heading">
            Best Real Estate Deals
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quam
            esse, commodi sint quia fugiat dolorem architecto vero enim mollitia
            sunt error quibusdam! Cum aperiam tempore repudiandae, saepe nobis
            pariatur.
          </p>
        </div>

        <div className="button-container">
          <button className="button">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
