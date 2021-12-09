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
      <p>Shareholder Information</p>
      <div>
        <form>
        <div> 
            <CustomInput type='checkbox' label="This shareholder is also a director "/>
            </div>
        <div className="input-group" style={{border:'none'}}>       
                  
            <CustomInput type="text" label="First name*"  placeholder={"Enter first name"}/>

            <CustomInput type="text" label="Middle name"  placeholder={"Enter middle name"}/>

            <CustomInput type="text" label="Last name*" placeholder={"Enter last name"}/>

            </div>
            <div className="input-group" style={{border:'none'}}> 
            <CustomInput type="text" label="Date of Birth*" placeholder={"Select Date of Birth"}/>

            <CustomInput type="text" label="Gender*" placeholder={"Select Gender"}/>

            <CustomInput type="text" label="Email address*" placeholder={"me@email.com"}/>

            <CustomInput type="text" label="Mobile*" placeholder={"9123456789"} Select
                options={options} // set list of the data
                value={selectedOption} // set selected value
                onChange={handleChange} 
               />

            <CustomInput type="text" label="Nationality*" placeholder={"Select your country"}/>

            <CustomInput type="text" label="Means of ID*" placeholder={"Select Means of ID"}/>

            <CustomInput type="text" label="ID Number/National ID*" placeholder={"Enter your ID Number/National ID"}/>

            <CustomInput type="text" label="Upload ID*" placeholder={"Upload ID"}/>

            <CustomInput type="text" label="Upload signature*" placeholder={"Upload signature"}/>

            </div>

            <div className='input-group'>
                <CustomInput type='text' label='Total Ownership Stake*' placeholder={"E.g 50%"}/>
                <CustomInput type='text' label='Class of shares*' placeholder={"Class of shares"}/>
            </div>

            <fieldset style={{border:'none', marginTop: "30px" }}>
                <legend>Residential Address</legend>

                <div style={{border:'none'}}>
                    <CustomInput type='text' label='Street Address*' placeholder={"Enter Street Address"}/>
                    <div className='input-group'>
                        <CustomInput label='City/Town*' placeholder={"Enter City/Town"}/>
                        <CustomInput label='District/Local Govt Area*' placeholder={"Enter District"}/>
                        <CustomInput label='Postal code*' placeholder={"Enter Postcode"}/>
                        <CustomInput label='State/Region/Province*' placeholder={"Enter State"}/>
                        <CustomInput label='Country*' placeholder={"Select Country"}/>
                    </div>
                    <div> 
                        <CustomInput type='checkbox' label="Postal Address is same as Residential address"/>
                    </div>
                </div>
            </fieldset>

            <fieldset style={{border:'none', marginTop: "30px" }}>
                <legend>Postal Address</legend>

                <div style={{border:'none'}}>
                    <CustomInput type='text' label='Street Address*' placeholder={"Enter Street Address"}/>
                    <div className='input-group'>
                        <CustomInput label='City/Town*' placeholder={"Enter City/Town"}/>
                        <CustomInput label='District/Local Govt Area*' placeholder={"Enter District"}/>
                        <CustomInput label='Postal code*' placeholder={"Enter Postcode"}/>
                        <CustomInput label='State/Region/Province*' placeholder={"Enter State"}/>
                        <CustomInput label='Country*' placeholder={"Select Country"}/>
                    </div>
                    
                </div>
            </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CompanyInformation; 