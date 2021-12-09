import React from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import './CompanyStyles.css';

const ApplicationTitle = () => {
  return <div className='application-title-container'>
          <p>Application Title</p>
          <CustomInput  
          type='text'
          />
  </div>;
};

export default ApplicationTitle;
