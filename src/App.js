import "./App.css";
import Navbar from "./components/widgets/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/home/Home";
import About from "./screen/about/About";
import SignUp from "./screen/auth/SignUp";
import Login from "./screen/auth/Login";
import ForgotPassword from "./screen/auth/ForgotPassword";
import Dashboard from "./screen/dashboard/Dashboard";
import NewService from "./screen/dashboard/NewService";
import CompanyApplication from "./screen/dashboard/companyApplication/CompanyApplication";

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/newServices" element={<NewService/>} />
        <Route path="/companyApplication" element={<CompanyApplication/>} />
    
      </Routes>
    </Router>
  );
}

export default App;
