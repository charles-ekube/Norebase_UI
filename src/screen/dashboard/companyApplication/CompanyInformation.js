import React, { useState } from "react";
import CustomInput from "../../../components/inputs/CustomInput";
import "./CompanyStyles.css";
import Select from "react-select";
import CustomSelect from "../../../components/inputs/CustomSelect";

const options = [
  { value: "+234", label: "+234" },
  { value: "+441", label: "+441" },
  { value: "+891", label: "+891" },
  { value: "+991", label: "+991" },
  { value: "+801", label: "+801" },
  { value: "+901", label: "+901" },
  { value: "+910", label: "+910" },
  { value: "+233", label: "+233" },
  { value: "+237", label: "+237" },
];

const CompanyInformation = () => {
  const [selectedOption, setSelectedOption] = useState(+234);
  const [state, setState] = useState({
    showPhysical: false,
    showPostal: false,
  });

  const togglePhysicalAddress = () => {
    if (!state.showPhysical) {
      setState((prevState) => ({ ...prevState, showPhysical: true }));
    } else {
      setState((prevState) => ({ ...prevState, showPhysical: false }));
    }
  };

  const togglePostalAddress = () => {
    if (!state.showPostal) {
      setState((prevState) => ({ ...prevState, showPostal: true }));
    } else {
      setState((prevState) => ({ ...prevState, showPostal: false }));
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e);
  };
  return (
    <div className="company-information-container">
      <p>Company Information</p>
      <div style={{ marginTop: "20px" }}>
        <form>
          <CustomInput
            type="text"
            label="Proposed Company Name (Option 1)*"
            margin="10px 0"
            border="1px solid #F0F0F0"
          />

          <CustomInput
            type="text"
            label="Proposed Company Name (Option 1)*"
            margin="10px 0"
            border="1px solid #F0F0F0"
          />

          <div className="input-group">
            <div>

              <label className="label">Nature of Business*</label>
              <CustomSelect />
            </div>

            <CustomInput
              type="text"
              label="Business Email*"
              margin="10px 0"
              border="1px solid #F0F0F0"
            />
          </div>

          <div className="input-group">
            <div className="number-selector">
              <div style={{ position: "relative", top: "10px" }}>
                <Select
                  options={options} // set list of the data
                  value={selectedOption} // set selected value
                  onChange={handleChange}
                />
              </div>
              <CustomInput
                type="text"
                label="Mobile*"
                margin="10px 0"
                border="1px solid #F0F0F0"
              />
            </div>

            <div style={{ margin: "10px 0" }}>
              <label className="label">Company Type*</label>
              <CustomSelect />
            </div>
          </div>
          <div className="description-input">
            <label className="label">Description*</label>
            <textarea aria-multiline="true"></textarea>
          </div>

          <div className="input-group">
            <div>
              <label className="label">Paid-up Capital*</label>
              <div className="prefix-container">
                <span>KES</span>
                <CustomInput type="text" border="none" />
              </div>

            </div>
            <CustomInput
              type="date"
              label="Proposed Start Date*"
              margin="10px 0"
              border="1px solid #F0F0F0"
            />

            <CustomInput
              type="text"
              label="Proposed Number of Employees*"
              margin="10px 0"
              border="1px solid #F0F0F0"
            />

            <div>
              <label className="label">Estimated turnover*</label>
              <div className="prefix-container">
                <span>KES</span>
                <CustomInput type="text" border="none" />
              </div>
            </div>
            {/* <CustomInput type="text" label="" /> */}
          </div>


          <fieldset style={{ border: "none", margin: "30px 0" }}>
            <legend className="legend">Physical Address</legend>
            <div className="checkbox-container">
              <CustomInput
                type="checkbox"
                onChange={togglePhysicalAddress}
                border="1px solid green"
              />
              <span>
                Would you like Norebase to provide you an address in Kenya?
                ($600)
              </span>
            </div>
            {!state.showPhysical && (
              <div>
                <CustomInput
                  type="text"
                  label="Street Address*"
                  margin="10px 0"
                  border="1px solid #F0F0F0"
                />
                <div className="input-group">
                  <CustomInput
                    label="Town*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="District*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="Postal code*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="State*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <div style={{ margin: "10px 0" }}>
                    <label className="label">Country*</label>
                    <CustomSelect />
                  </div>

                </div>
              </div>
            )}
          </fieldset>

          <fieldset style={{ border: "none", margin: "30px 0" }}>
            <legend className="legend">Postal Address</legend>
            <div className="checkbox-container">
              <CustomInput
                type="checkbox"
                onChange={togglePostalAddress}
                border="1px solid green"
              />
              <span>Postal Address is same as Physical Address</span>
            </div>
            {!state.showPostal && (
              <div>
                <CustomInput
                  type="text"
                  label="Street Address*"
                  margin="10px 0"
                  border="1px solid #F0F0F0"
                />
                <div className="input-group">
                  <CustomInput
                    label="Town*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="District*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="Postal code*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <CustomInput
                    label="State*"
                    margin="10px 0"
                    border="1px solid #F0F0F0"
                  />
                  <div style={{ margin: "10px 0" }}>
                    <label className="label">Country*</label>
                    <CustomSelect />
                  </div>
                </div>
              </div>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CompanyInformation;
