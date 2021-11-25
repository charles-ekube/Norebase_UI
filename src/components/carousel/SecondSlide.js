import React from "react";
import Cards from "../cards/Cards";
import "./carouselStyles.css";

const SecondSlide = () => {
  return (
    <>
      <section className="grid-layout">
        <Cards borderLeftColor={"#D1FAFA"} padding={"0 0 10px 20px"}>
          <h5>We know the right people</h5>
          <p>
            Looking for a lawyer? Or a company secretary? We’ve got you. You
            don’t have to do all the legwork of building relationships, we have
            a network of trusted service providers to give you the best
            services.
          </p>
        </Cards>
        <Cards borderLeftColor={"#DFFAD1"} padding={"0 0 10px 20px"}>
          <h5>
            Tell us where you want to launch, we’ll tell you what you need
          </h5>
          <p>
            Don’t go in blind. Want to register a finance business in South
            Africa or manufacturing business in Nigeria? We’ll tell you what you
            need in your specific industry in whatever country you’re interested
            in.
          </p>
        </Cards>
        <Cards borderLeftColor={"#D2F5DE"} padding={"0 0 10px 20px"}>
          <h5>Transparent process</h5>
          <p>
            Be up to date on the whole process. Real-time updates on the status
            of your business startup, showing progress made up until complete
            registration.
          </p>
        </Cards>
        <Cards borderLeftColor={"#F5F5CC"} padding={"0 0 10px 20px"}>
          <h5>100% focused on your success</h5>
          <p>
            Norebase is committed to helping your company succeed in new
            markets, wherever you are. Our goal is simple: we want to help you
            run a fully functional business across multiple African countries.
          </p>
        </Cards>
      </section>
    </>
  );
};

export default SecondSlide;
