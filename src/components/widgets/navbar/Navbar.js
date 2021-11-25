import React from "react";
import {
  Nav,
  //   NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../../assets/svg/Logo";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CustomButtons from "../../buttons/CustomButtons";

const Navbar = () => {
  return (
    <>
      <section className="nav">
        <div className="navLogo">
          <Link to="/" className="navLinks">
            <Logo />
          </Link>
        </div>
        <div style={{alignSelf:'center'}}>
          <FaBars className="bars" />
        </div>
        <div className="navMenu">
          <Link to="/about" className="navLinks">
            About
          </Link>
          <Link to="/about" className="navLinks">
            Products
          </Link>
        </div>
        <div className="navMenu">
          <Link to="/login" className="navLinks">
            Sign in
          </Link>
          <Link to="/" className="navLinks">
            <CustomButtons
              background="rgb(18, 185, 186)"
              title={`Let's take you there`}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;

// <Nav>
// <NavLink to='/'>
//  <Logo/>
// </NavLink>
// <Bars />
// <NavMenu>
//   <NavLink to='/about' activeStyle>
//     About
//   </NavLink>
//   <NavLink to='/services' activeStyle>
//     Services
//   </NavLink>
//   <NavLink to='/contact-us' activeStyle>
//     Contact Us
//   </NavLink>
//   <NavLink to='/sign-up' activeStyle>
//     Sign Up
//   </NavLink>
//   {/* Second Nav */}
//   {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// </NavMenu>
// <NavBtn>
//   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
// </NavBtn>
// </Nav>
