import React from "react";
import Typewriter from "typewriter-effect";
import Background from "../../assets/map.svg";
import CustomButtons from "../../components/buttons/CustomButtons";
import "./HomeStyles.css";
import NoteIcon from "../../assets/notes.svg";
import AfroPrenuer from "../../assets/afro.jpg";
import Patricia from "../../assets/pat.jpg";
import Send from "../../assets/send.jpg";
import Brass from "../../assets/brass.jpg";
import AnswerQuestions from "../../assets/cardone.svg";
import UploadDocuments from "../../assets/card2.svg";
import IdentificationNumber from "../../assets/card3.svg";
import NoteSecondIcon from "../../assets/note.svg";
import Navbar from "../../components/widgets/navbar/Navbar";
import Footer from "../../components/widgets/footer/Footer";
import NavComponent from "../../components/nav/NavComponent";
import CarouselSlider from "../../components/carousel/CarouselSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="content-container">
          <section className="hero-section">
            <div className="hero-section-overlay">
              <article className="hero-section-overlay-content">
                <div className="hero-section-header">
                  <h1>
                    Launch in
                    <Typewriter
                      options={{
                        strings: [
                          "Lagos",
                          "Nairobi",
                          "Cape Town",
                          "Accra",
                          "Cairo",
                          "Abidjan",
                          "Kigali",
                        ],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "text",
                      }}
                    />
                        without hopping on a plane.
                  </h1>
                </div>
                <div className="hero-text-container">
                  <p className="hero-text">
                    We are your gateway to the African Market. We’ll help you
                    start, operate and scale across Africa with no stress.
                    Whether you want to launch in Ghana, or trademark your IP in
                    South Africa, or register for taxes in Kenya, we’ve got you
                    covered.
                  </p>
                </div>
              </article>
              <div>
                <CustomButtons
                  title="Get Started"
                  background="rgb(18, 185, 186)"
                />
              </div>
              <div className="hero-button-footer">
                <img src={NoteIcon} alt="icon" />
                <p>
                  No confusing paperwork, no complexities, and no hidden fees!
                </p>
              </div>
            </div>
          </section>

          <section className="hero-section-footer">
            <h4>TRUSTED BY</h4>
            <ul>
              <li>
                <img src={AfroPrenuer} alt="poster" />
              </li>
              <li>
                <img src={Patricia} alt="poster" />
              </li>
              <li>
                <img src={Send} alt="poster" />
              </li>
              <li>
                <img src={Brass} alt="poster" />
              </li>
            </ul>
          </section>

          <section className="setup-business-section">
            <div>
              <h3>
                Set up your business in just a few minutes <br />
                <span style={{ color: "#F06900" }}>
                  in any country in Africa
                </span>
              </h3>
            </div>
            <div className="setup-business-list">
              <ul>
                <li id="answer-questions">
                  <img src={AnswerQuestions} alt="poster" />
                  <p>Answer a few questions</p>
                </li>
                <li id="upload-documents">
                  <img src={UploadDocuments} alt="poster" />
                  <p>Upload your documents</p>
                </li>
                <li id="identification">
                  <img src={IdentificationNumber} alt="poster" />
                  <p>
                    Get a registered company and tax identification number
                  </p>
                </li>
              </ul>
            </div>
            <div className="setup-business-footer">
              <CustomButtons
                title="Get started"
                background="rgb(18, 185, 186)"
              />
              <div className="setup-business-footer-text">
                <img src={NoteSecondIcon} alt="icon" />
                <p>
                  The service is currently available in Nigeria, Ghana, Kenya
                  and South Africa. More countries coming soon.
                </p>
              </div>
            </div>
          </section>

          <section className="secure-ideas-section">
            <div className="secure-ideas-header">
              <h4>
                Secure your <span style={{color:'#F06900'}}>ideas</span>
              </h4>
              <p>
                Your name, slogan, logo and intellectual property maybe worth
                billions tomorrow.
              </p>
            </div>
            <div className="secure-ideas-footer">
              <p>Let's help you protect them today.</p>
              <CustomButtons
                title="Get Started"
                background="rgb(18, 185, 186)"
              />
            </div>
          </section>

          <section style={{padding:'50px 0'}}>
            <CarouselSlider/>
          </section>
          
          <section>
            <div className="home-bottom-footer">
              <h3>
                With Norebase, Africa is yours. Launch, operate and scale across
                Africa quickly and safely.
              </h3>
              <div style={{marginTop:'50px'}}>
                <CustomButtons
                  background="rgb(18, 185, 186)"
                  title={`Let's take you there`}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
