import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import FreeCourse from "./FreeCourse";
import Features from "./Features";
import Company from "./Company";
import About from "./About";

const Home = () => {
  return (
    <>
      <Fragment>
        <Navbar />
        <HeroSection />
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="courses-section" id="courses">
          <FreeCourse />
        </section>
        <section className="features-section" id="features">
          <Features />
        </section>
        <section className="company-section" id="partners">
          <Company />
        </section>
      </Fragment>
    </>
  );
};

export default Home;
