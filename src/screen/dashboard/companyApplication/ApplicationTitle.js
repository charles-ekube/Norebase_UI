import React from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import "./CompanyStyles.css";

const ApplicationTitle = () => {
  return (
    <div className="application-title-container">
      <p>Application Title</p>
      <form>
        <CustomInput type="text" margin="10px 0" border="1px solid #F0F0F0" />
      </form>
    </div>
  );
};

export default ApplicationTitle;
