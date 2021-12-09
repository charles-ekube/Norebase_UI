import React from "react";

const CustomRadioSelect = ({ title, border, active, onClick }) => {
  return (
    <>
      <div style={{ display: "flex", padding: "7px 0" }} onClick={onClick}>
        <div
          style={{
            padding: "10px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: active ? '1px solid #FF8501' : '1px solid #000',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {active ? (
            <span
            style={{
              backgroundColor: "#FF8501",
              width: "15px",
              height: "10px",
              borderRadius: "50%",
              padding: "7px",
            }}
          ></span>
          ): null}
          
        </div>
        <p style={{marginLeft:'10px'}}>{title}</p>
      </div>
    </>
  );
};

export default CustomRadioSelect;
