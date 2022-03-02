import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import "../../components/AntCarousel/AntCarousel.scss";
import { Carousel } from "antd";
import programmer1 from "../../assets/img/slider/programmer1.jpg";
import programmer2 from "../../assets/img/slider/programmer2.jpg";
import programmer3 from "../../assets/img/slider/programmer3.jpg";



function HomePage() {
  const slides = [
    `url(${programmer1})`,
    `url(${programmer2})`,
    `url(${programmer3})`,
  ];

  const [value, setValue] = useState(0);

  const [background, setBackground] = useState({});
  useEffect(() => {
    changeBg();
    return () => {
      setBackground({});
    };
  }, []);
  const changeBg = () => {
    setBackground(
      setInterval(() => {
        setValue((v) => (v >= 2 ? 0 : v + 1));
      }, 5000)
    );
  };

  return (
    <div className="main-page">
      <div className="slider">
        <Carousel
          autoplay={false}
          autoplaySpeed={2000}
          pauseOnHover={false}
          dots={false}
          arrows={false}
        >
          <div className="slider__slide">
            <div
              className="slider__item"
              style={{ backgroundImage: slides[value] }}
            >
              <div className="slider__text">
                <h2>Тестовое задание, которое поможет найти мне работу!</h2>
                <h3>
                  Или как минимум, узнать, что мне нужно еще подучить
                  <br />(но лучше, конечно же, работу:D (буду очень-очень стараться))
                </h3>
              </div>
              <div className="slider__item_shadow"></div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
