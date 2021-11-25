import React from "react";

const Cards = ({ padding, borderLeftColor, children }) => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: padding,
          borderLeft: "2px solid",
          borderLeftColor: borderLeftColor,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Cards;
