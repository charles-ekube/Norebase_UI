import React, { useState } from "react";
import CustomRadioSelect from "../../../components/radioSelect/CustomRadioSelect";
import { CompanyList } from "../../../components/radioSelect/RadioList";
import "./CompanyStyles.css";

const SelectCountry = () => {
  const [state, setState] = useState({
    active: false,
  });

  const setActiveState = () => {
    if (state.active) {
      setState((prevState) => ({ ...prevState, active: false }));
    } else {
      setState((prevState) => ({ ...prevState, active: true }));
    }
  };

  function selectItem(id) {
    CompanyList.map((val, i) => {
      if (val.id === id) {
        console.log(val);
        // setState((prevState) => ({ ...prevState, active: true }));
        setActiveState();
      } else {
        return val;
      }
    });
  }

  return (
    <main className="select-country-container">
      {CompanyList.map((item, id) => (
        <>
          <div key={item.id} onClick={() => selectItem(item.id)} className='select-country-item'>
            <CustomRadioSelect title={item.country} active={state.active}/>
          </div>
        </>
      ))}

      {/* 
      <CustomRadioSelect active={state.active} onClick={setActiveState} title='Ghana'/> 
      <CustomRadioSelect active={state.active} onClick={setActiveState} title='Kenya'/> 
      <CustomRadioSelect active={state.active} onClick={setActiveState} title='Nigeria'/> 
      <CustomRadioSelect active={state.active} onClick={setActiveState} title='South Africa'/>  */}
    </main>
  );
};

export default SelectCountry;
