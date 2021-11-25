import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CustomButtons = ({
  title,
  background,
  fontSize,
}) => {


    const [showIcon, setShowIcon] = useState(false);
  return (
    <button
      style={{
        background: background,
        borderRadius: '4px',
        border: 'none',
        color: '#fff',
        fontSize: '20px',
        padding:'15px 20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        textDecoration:'none',
      }}
    >
      {title}
      <FaArrowRight style={{marginLeft:'10px',}}/>
    </button>
  );
};

export default CustomButtons;
