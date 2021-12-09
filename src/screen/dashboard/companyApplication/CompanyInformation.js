import React, { useState } from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import "./CompanyStyles.css";
import Select from 'react-select';


const options = [
    { value: '+234', label: '+234' },
    { value: '+441', label: '+441' },
    { value: '+891', label: '+891' },
    { value: '+991', label: '+991' },
    { value: '+801', label: '+801' },
    { value: '+901', label: '+901' },
    { value: '+910', label: '+910' },
    { value: '+233', label: '+233' },
    { value: '+237', label: '+237' },
  ]

const CompanyInformation = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = e => {
        setSelectedOption(e);
      }
  return (
    <div className="company-information-container">
      <p>Company Information</p>
      <div style={{ marginTop: "20px" }}>
        <form>
          <CustomInput type="text" label="Proposed Company Name (Option 1)*" />

          <CustomInput type="text" label="Proposed Company Name (Option 1)*" />

          <div className="input-group">
          <Select
                options={options} // set list of the data
                value={selectedOption} // set selected value
                onChange={handleChange} 
               />

            <CustomInput type="text" label="Business Email*" />
          </div>

          <div className="input-group">
            <div>
              <CustomInput type="text" label="Nature of Business*" />
            </div>

            <CustomInput type="text" label="Business Email*" />
          </div>
            <div>
                <label>Description</label>
                <textarea>

                </textarea>
            </div>

            <div className='input-group'>
                <CustomInput type='text' label='Paid-up Capital*'/>
                <CustomInput type='text' label='Proposed Start Date*'/>
                <CustomInput type='text' label='Proposed Number of Employees*'/>
                <CustomInput type='text' label='Estimated turnover*' />
            </div>

            <fieldset style={{border:'none'}}>
                <legend>Physical Address</legend>
                <div>
                    <CustomInput type='checkbox'/>
                    <span>Would you like Norebase to provide you an address in Kenya? ($600)</span> 
                </div>

                <div>
                    <CustomInput type='text' label='Street Address*'/>
                    <div className='input-group'>
                        <CustomInput label='Town*'/>
                        <CustomInput label='District*'/>
                        <CustomInput label='Postal code*'/>
                        <CustomInput label='State*'/>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CompanyInformation;
