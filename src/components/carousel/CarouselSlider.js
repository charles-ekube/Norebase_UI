import React, { useState } from "react";
import "./carouselStyles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SlidesData from "./CarouselGrid";

const CarouselSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider-container">
        <div className="arrows left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </div>
        <div className="arrows right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </div>
        {/* {data.map((slide, index) => {
              return <div>{slide}</div>
          })} */}
        {SlidesData.map((slide, index) => {
          return (
            <section
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="slide-container">{slide}</div>
              )}
              
            </section>
          )
        })}
      </section>
    </>
  );
};

export default CarouselSlider;
