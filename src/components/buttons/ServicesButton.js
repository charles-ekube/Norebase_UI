import React from "react";

const ServicesButton = ({ title, color, background, padding, onClick }) => {
  return (
    <button
      style={{
        background: background,
        boxShadow: "rgb(255 133 0 / 20%) 0px 2px 4px 0px",
        textAlign: "center",
        fontFamily: "NeueHaasDisplay-Bold",
        fontSize: " 14px",
        color:color,
        borderRadius:'5px',
        border:'none',
        padding:padding
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ServicesButton;
