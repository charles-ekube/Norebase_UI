import React from "react";
import Cards from "../cards/Cards";
import "./carouselStyles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";


const data = [
  <FirstSlide/>,
    
 <SecondSlide/>,
    

]

const CarouselSlider = () => {


  return (
    <>
      <section>
          <div className='arrows arrow-left'>
             <FaArrowLeft/>   
          </div>
          <div className='arrows arrow-right'>
             <FaArrowRight/>   
          </div>
          {data.map((slide, index) => {
              return <div>{slide}</div>
          })}
     
      </section>
    </>
  );
};

export default CarouselSlider;
