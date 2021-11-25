import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import AuthButton from "../../components/buttons/AuthButton";
import CustomButtons from "../../components/buttons/CustomButtons";
import "./authStyles.css";

const Login = () => {
  return (
    <main className="auth-container">
      <div style={{ padding: "30px 0" }}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div>
        <h3 className="form-header">Login</h3>
        <form>
          <div className="form-group">
            <label>Email Address*</label>
            <input placeholder={"me@mail.com"} type="email" required />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input placeholder={"Enter Password"} type="password" required />
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/forgotPassword" className="link">
              Forgot Password
            </Link>
          </div>
          <div style={{ marginTop: "10px" }}>
            <AuthButton title="Login" background="rgba(255, 133, 0, 0.5)" />
          </div>
        </form>
        <div className='auth-footer'>
            <Link   to='/sign-up' className='link'>
                Don't have an account? Create an account
            </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
