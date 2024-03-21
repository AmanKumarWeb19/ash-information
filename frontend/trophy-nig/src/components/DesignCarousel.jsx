import React from "react";
import Slider from "react-slick";
import cn from "classnames";
import style from "./Feature.module.css";
const DesignerCarousel = () => {
  const properties = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710892800&semt=ais",
      name: "Kathryn Murphy",
      profession: "Designer",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais",
      name: "Brooklyn Simmons",
      profession: "Professional designer",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.jpg",
      name: "Floyd Miles",
      profession: "Interior Designer",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/young-successful-businessman-sitting-workplace-office-background_176420-5247.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais",
      name: "Ronald Richards",
      profession: "Designer",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais",
      name: "Brooklyn Simmons",
      profession: "Professional designer",
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710892800&semt=ais",
      name: "Kathryn Murphy",
      profession: "Designer",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          <div className="px-6 w-[80%] shadow-lg">
            <div
              key={item.id}
              className="border border-gray-200 rounded-t-[0.5rem] font-sans py-5"
            >
              <div className="relative flex items-center justify-center">
                <img
                  className="h-40 w-40 rounded-[100%]  "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-bold text-[#133223]">{item.name}</div>
                <div className="text-[#133223] leading-[1.5rem]">
                  {item.profession}
                </div>
                <div className="flex items-center justify-evenly">
                  <div>
                    <i
                      class="fa-brands fa-facebook"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                  <div>
                    <i
                      class="fa-brands fa-instagram"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                  <div>
                    <i
                      class="fa-brands fa-twitter"
                      style={{ color: "#10c66f" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DesignerCarousel;
