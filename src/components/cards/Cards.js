import React from "react";

const Cards = ({ padding, borderLeftColor, children }) => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: padding,
          borderLeft: "3px solid",
          borderLeftColor: borderLeftColor,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Cards;
