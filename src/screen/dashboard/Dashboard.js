import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButtons from "../../components/buttons/CustomButtons";
import ServicesButton from "../../components/buttons/ServicesButton";
import DashboardTabs from "../../components/tabs/DashboardTabs";
import DashboardNav from "../../components/widgets/navbar/DashboardNav";
import "./DashboardStyles.css";

const Dashboard = (props) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <>
      <DashboardNav />
      <main className="main">
        <header className="header-container">
          <h3>My Applications</h3>
          <Link to='/newServices'>
            <ServicesButton 
                background='#FF8500'
                color='#fff'
                title='New Services'
                padding='15px 30px'
            />
          </Link>
        </header>
        <DashboardTabs />
      </main>
    </>
  );
};

export default Dashboard;
