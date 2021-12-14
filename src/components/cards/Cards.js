import React from "react";

const Cards = ({
  padding,
  borderLeftColor,
  children,
  background,
  borderLeft,
  borderRadius,
  boxShadow,
  alignItems,
  justifyContent,
  height,
  margin,
  width
}) => {
  return (
    <>
      <div
        style={{
          background: background,
          padding: padding,
          borderLeft: borderLeft,
          borderRadius: borderRadius,
          borderLeftColor: borderLeftColor,
          boxShadow:boxShadow,
          alignItems:alignItems,
          justifyContent:justifyContent,
          height:height,
          margin:margin,
          width:width
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Cards;
