import React from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import './CompanyStyles.css';


const ShareCapital = () => {
  return <div className="share-capital-container">
          <p>Share Capital</p>
          <div>
              <p>Please input your company's share capital</p>

              <CustomInput  label='share capital value' placeholder='NGN'
          type='text' ></CustomInput>

          </div>

          <div style={{ marginTop: "20px" }}>
          <a href='jj'>
          <button>Wholly Nigerian-owned company <br/>
          Minimum share capital of NGN100,000
          </button> </a>
        </div>

        <div style={{ marginTop: "20px" }}>
          <a href='jj'>
          <button>Foreign participant company <br/>
          Minimum share capital of NGN10,000,000
          </button> </a>
          </div>
          
  </div>;
};

export default ShareCapital;
