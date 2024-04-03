import React from "react";
import AboutBackgroundImage from "../Assets/about.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Who we Are? Were young & wild explorers out on a journey to turn on your true vibe.
        </h1>
        <h3 className="primary-text">
        Goat set sail in 2014</h3>
        <p className="primary-text">
        During one of their many explorations, our founders <strong>Vicky Stark</strong> discovered that the dopest people of our land were in search of <strong>affordable, durable</strong> 
and <strong>ultra fashionable</strong> audio products to grove to.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
