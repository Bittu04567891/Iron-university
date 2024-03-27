import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>About Iron University</h2>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images-logo.jpg" alt="" />
            </div>
            <div className="detail-box">
              <p>
                Discover fitness made simple at our modern facility. From
                top-notch equipment to friendly trainers, we're here to make
                your journey easy and enjoyable. Get ready to achieve your
                fitness goals in a welcoming environment. Join us – where
                simplicity meets strength!
              </p>
              <Link to="./About">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
