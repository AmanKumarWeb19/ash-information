import React from "react";
import Slider from "react-slick";
import cn from "classnames";
import style from "./Feature.module.css";
const Carousel = () => {
  const properties = [
    {
      id: 1,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shortelt-2.jpeg",
      add: "Mini Flat in Lekki Phase",
      dim: "N 2,500,000/sq ft",
      bed: 3,
      bath: 2,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
    {
      id: 2,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shorlet-11.jpeg",
      add: "Mini Flat in Lekki Phase",
      dim: "N 2,500,000/sq ft",
      bed: 2,
      bath: 1,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
    {
      id: 3,
      img: "https://images.nigeriapropertycentre.com/properties/images/thumbs/981798/060d855a3ac127-mini-flat-one-bedroom-pent-floor-mini-flats-short-let-lekki-phase-1-lekki-lagos.JPG",
      add: "Mini Flat in Lekki Phase",
      dim: "N 2,500,000/sq ft",
      bed: 3,
      bath: 2,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
    {
      id: 4,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shortelt-2.jpeg",
      add: "Mini Flat in Lekki Phase",
      dim: "N 2,500,000/sq ft",
      bed: 3,
      bath: 2,
      developer: "Managed by JR Developers",
      deal: "For Rent",
    },
    {
      id: 5,
      img: "https://trophyproperty.ng/wp-content/uploads/2024/01/shorlet-11.jpeg",
      add: "Mini Flat in Lekki Phase",
      dim: "N 2,500,000/sq ft",
      bed: 4,
      bath: 3,
      developer: "Managed by JR Developers",
      deal: "For Sale",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {properties?.map((item) => (
          <div className="px-6 w-[80%]">
            <div
              key={item.id}
              className="border border-gray-400 rounded-t-[0.5rem] font-sans"
            >
              <div className="relative">
                <img
                  className="h-full w-full rounded-lg"
                  src={item.img}
                  alt=""
                />
                <div className="absolute top-4 left-4 bg-[#10c66f] text-white rounded-md px-3 py-1">
                  {item.deal}
                </div>
                <div className="absolute top-4 right-4 flex flex-col w-[10%] gap-[0.5rem]">
                  <div
                    className={cn(
                      "w-[90%] flex justify-center items-center p-1",
                      style.glassmorphism
                    )}
                  >
                    <i
                      class="fa-solid fa-heart"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                  <div
                    className={cn(
                      "w-[90%] flex justify-center items-center p-1",
                      style.glassmorphism
                    )}
                  >
                    <i
                      class="fa-solid fa-file-circle-plus"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                  <div
                    className={cn(
                      "w-[90%] flex justify-center items-center p-1",
                      style.glassmorphism
                    )}
                  >
                    <i
                      class="fa-solid fa-maximize"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div>{item.add}</div>
                <div className="font-bold text-[#10C66F] leading-[1.5rem]">
                  {item.dim}
                </div>
                <div className={cn()}>
                  <span className="font-bold">{item.bed}</span> Bed{" "}
                  <span className="font-bold">{item.bath}</span> bath
                </div>
                <div className="mt-2">{item.developer}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
