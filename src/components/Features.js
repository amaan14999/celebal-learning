import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Features.css";

const FeatureData = [
  {
    title: "Personal Development",
    desc: "Our platform adapts to your learning style, provides personalized recommendations, and celebrates your achievements as you reach milestones.",
  },

  {
    title: "Expert Instructors",
    desc: "Learn from top experts in the field! Our platform connects you with industry leaders who are passionate about sharing their knowledge. Gain valuable insights, insider tips, and practical expertise to enhance your learning journey.",
  },

  {
    title: "Adaptive Learning",
    desc: "Our e-learning platform offers flexible learning options to accommodate your busy life. Learn at your own pace, on your schedule. With 24/7 course availability, you can study whenever and wherever it's most convenient for you.",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Features</h2>
          </Col>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">{/* <i class={item.icon}></i> */}</h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
