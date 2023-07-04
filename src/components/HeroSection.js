import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../images/students_09.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Learn At Your <br /> Own Pace
              </h2>
              <p className="mb-5">
                Embrace flexible learning, anytime, anywhere. <br />
                Take control of your education and learn on
                <br /> your own terms. Adapt to your schedule and unlock <br />
                endless possibilities for personal growth.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
