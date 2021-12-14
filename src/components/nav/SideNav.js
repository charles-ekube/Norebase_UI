import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import { useNavigate } from "react-router";
import './SideNavStyles.css';
import SideNavList from "./SideNavList";
import ServicesButton from "../buttons/ServicesButton";
import SideTabList from "./SideTabList";

const SideNav = ({ children, slides,tabList }) => {
  const history = useNavigate();

  const [current, setCurrent] = useState(0);
  // const [activeTab, setActiveTab] = useState(1);
  const [currentTab, setCurrentTab] = useState(0)
  const length = slides.length;
  const listLength = tabList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setCurrentTab(currentTab === listLength -1 ? 0 : current +1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <main style={{ display: 'flex', }}>
        <section
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            position: 'fixed',
            width: '250px'
          }}
        >
          <div>
            <div style={{ padding: '20px 25px 5px 25px  ' }}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="back-link">
              <MdKeyboardArrowLeft size={22} />
              <p onClick={() => history(-1)}>Back</p>
            </div>
          </div>

          <ul className='applications-link'>
          {SideTabList.map((tab, index) => {
            return (
              <li key={index} 
          //     className={`
          //     ${activeTab === item.id && 'border-left' }
          // `}
          >
                {/* {index === currentTab && ( */}
                  {/* <span> */}
                    {tab.tab}
                  {/* </span> */}
                {/* )} */}
              </li>
            )
          })}
          </ul>
        </section>
        <section style={{ marginLeft: '250px', width: '100%', }}>
          {SideNavList.map((slide, index) => {
            return (
              <section
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="slide-container">{slide}</div>
                )}

              </section>
            )
          })}
          <div className="dashboard-footer" >
            <ServicesButton
              background="#FF8500"
              color="#fff"
              title="Select"
              padding="15px 40px"
              onClick={prevSlide}
            />
            <ServicesButton
              background="#FF8500"
              color="#fff"
              title="Select"
              padding="15px 40px"
              onClick={nextSlide}
            />
          </div>
        </section>
      </main>

    </>
  );
};

export default SideNav;