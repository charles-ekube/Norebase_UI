import React from "react";
import Cards from "../cards/Cards";
import "./carouselStyles.css";

const FirstSlide = () => {
  return (
    <>
      <section className="grid-layout">
        <Cards 
            borderLeftColor={'#FAD1EC'}
            padding={"0 0 10px 20px"}
        >
          <h5>Africa with no bothers borders</h5>
          <p>
            Experience Africa as one market. We are your ticket to 54 African
            countries. Save time, money, and stress of going through the same
            process whenever you choose to expand. Setting up a company in every
            African country is 10x easier, safer, and more efficient with us.
          </p>
        </Cards>

        <Cards
            borderLeftColor={'#FFE6E6'}
            padding={"0 0 10px 20px"}
        >
          <h5>Setting up a new country operation? Do it right</h5>
          <p>
            You’ve worked hard to launch in a new country. But if your company
            isn’t set up correctly, you won’t be able to do business or bring in
            new revenue. So, let us help you take the guesswork out of
            country-specific laws and regulations– and get your business started
            fast.
          </p>
        </Cards>
        <Cards
        borderLeftColor={'#F1F1C9'}
        padding={"0 0 10px 20px"}
        >
          <h5>Set up in no time</h5>
          <p>
            You don’t need a team of lawyers or spend weeks or months
            researching how to set up in another country. You just need
            Norebase. We’ll help you register your business, trademark your IP,
            get a registered mailing address and get a corporate bank account
            when you sign up on Norebase.
          </p>
        </Cards>
        <Cards 
        borderLeftColor={"#E4FBB6"}
        padding={"0 0 10px 20px"}
        >
          <h5>Everything you need to start or expand</h5>
          <p>
            We’ll give you everything you need to start, operate, and scale in
            every African country, from setting up your company to filing
            patents or registering your trademark in multiple countries. We are
            a one-stop shop for businesses looking to enter any African country.
          </p>
        </Cards>
      </section>
    </>
  );
};

export default FirstSlide;
