import React from "react";
import Navbar from "../../components/widgets/navbar/Navbar";
import AboutHero from '../../assets/about-hero.svg';
import './aboutStyles.css';
import Footer from "../../components/widgets/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="about-container">
        <section className='about-content'>
          <div>
              <img src={AboutHero} alt='poster'/> 
          </div>
          <article className='about-text-container'>
            <span>ABOUT NOREBASE</span>
            <h3>Launch and expand your Business across Africa</h3>
            <p>
              Norebase knows that there’s the opportunity to grow successful
              businesses in Africa. We also understand the complexities of the
              market, so we are using technology to make doing business in
              Africa worthwhile. With Norebase you get to operate in Africa with
              no hassle and with minimum risk.
            </p>
            <p>
              We believe African entrepreneurs should be able to start a
              business and expand into other markets in a transparent, fast, and
              efficient way.
            </p>
            <p>
              We are founded on the theory that leveraging technology to build
              anti-fragile businesses in more competitive markets will unlock an
              era of Africa-wide prosperity.
            </p>
            <p>
              With Norebase, you have the best minds on the continent, helping
              simplify the complications of launching in any African market.
            </p>
          </article>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default About;
