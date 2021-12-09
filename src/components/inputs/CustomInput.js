import React from "react";

const CustomInput = ({ type, onChange, value, placeholder, label, height, prefix }) => {
  return (
    <>
      <div>
        <label
          style={{
            height: "20px",
            fontFamily: "NeueHaasDisplay-Roman",
            fontSize: "14px",
            color: "rgb(51, 51, 51)",
            lineHeight: "1.4",
            width: "750px",
          }}
        >
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          prefix={prefix}
          style={{
            background: "#fff",
            borderRadius: "5px",
            border: "1px solid #F0F0F0",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            height:height
          }}
        />
      </div>
    </>
  );
};

export default CustomInput;
