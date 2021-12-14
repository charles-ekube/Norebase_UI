import React from "react";
import "./InputStyles.css";

const CustomSelect = () => {

  return (
    <>
    <select name="cars" id="cars" className='select-container'>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
    </>
  );
};

export default CustomSelect;
