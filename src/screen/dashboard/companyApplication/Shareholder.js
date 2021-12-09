import React from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import './CompanyStyles.css';
import ShareholderButton from "../../../components/buttons/ShareholderButton"

const Shareholder = () => {
  return <div className='application-title-container'>
          <p>Shareholder Information</p>
          <CustomInput 
          type='text'
          /> 
        <ShareholderButton> Add </ShareholderButton>

  </div>;
};

export default Shareholder;
