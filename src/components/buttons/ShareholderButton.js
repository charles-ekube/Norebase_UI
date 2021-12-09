import React from "react";

const ShareholderButton = ({ title, color, background, padding, onClick }) => {
  return (
    <button
      style={{
        background: '#FF8500',
        boxShadow: "rgb(255 133 0 / 20%) 0px 2px 4px 0px",
        align: "right",
        textAlign: "right",
        fontFamily: "NeueHaasDisplay-Bold",
        fontSize: " 14px",
        borderRadius:'10px',
        border:'none',
        padding:'20px'
      }}
      onClick={onClick}
    >
      {title= "Add"}
    </button>
  );
};

export default ShareholderButton;
