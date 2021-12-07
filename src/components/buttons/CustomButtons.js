import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CustomButtons = (props) => {
  const { title, background, fontSize, showIcon, justifySelf } = props;
  return (
    <button
      style={{
        background: background,
        borderRadius: "4px",
        border: "none",
        color: "#fff",
        fontSize: "20px",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textDecoration: "none",
        justifySelf:justifySelf
      }}
    >
      {title}
      {showIcon ? <FaArrowRight style={{ marginLeft: "10px" }} /> : null}
    </button>
  );
};

export default CustomButtons;
