import React, { useState } from "react";
import "./authStyles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import AuthButton from "../../components/buttons/AuthButton";
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

const SignUp = () => {

    
  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  return (
    <>
      <main className="auth-container">
        <div style={{ padding: "30px 0" }}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <h3 className="form-header">Sign Up</h3>
          <form>
            <div className="form-group">
              <label>First Name*</label>
              <input placeholder={"Enter First Name"} type="text" required />
            </div>

            <div className="form-group">
              <label>Last Name*</label>
              <input placeholder={"Enter Last Name"} type="text" required />
            </div>

            <div className="form-group">
              <label>Email Address*</label>
              <input placeholder={"me@mail.com"} type="email" required />
            </div>
            <div className="form-group" id='number-selector' >
               <Select
                options={options} // set list of the data
                value={selectedOption} // set selected value
                onChange={handleChange} 
               />
                 <input placeholder={"Phone Number"} type="tel" required />
            </div>

            <div className="form-group">
              <label>Password*</label>
              <input placeholder={"Enter Password"} type="password" required />
            </div>

            <div className="form-group">
              <label>Confirm Password*</label>
              <input placeholder={"Enter Password"} type="password" required />
            </div>

            <div style={{ marginTop: "10px" }}>
              <AuthButton title="Login" background="rgba(255, 133, 0, 0.5)" />
            </div>
          </form>

          <div className="auth-footer">
            <Link to="/sign-up" className="link">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
