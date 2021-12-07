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
          margin:margin
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Cards;
