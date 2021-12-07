import React, { useState } from "react";
import Logo from "../../../assets/svg/Logo";
import "./Nav.css";
import ProfileAvatar from "../../../assets/profile.png";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const [state, setState] = useState({
    showDropDown: false,
  });

  const showDropdownMenu = () => {
    if (state.showDropDown) {
      setState((prevState) => ({ ...prevState, showDropDown: false }));
    } else {
      setState((prevState) => ({ ...prevState, showDropDown: true }));
    }
  };

  return (
    <>
      <nav className="nav extra-padding">
        <div className="navLogo">
          <Link to="/" className="navLinks">
            <Logo />
          </Link>
        </div>
        <div className="user-name-avatar" onClick={showDropdownMenu}>
          <p>Charles</p>
          <img src={ProfileAvatar} alt="avatar" width="30" height="30" style={{marginLeft:'10px'}} />
        </div>

        {state.showDropDown ? (
          <div className="dropdown">
           <ul>
               <li>Your Profile</li>
               <li>Logout</li>
           </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default DashboardNav;
