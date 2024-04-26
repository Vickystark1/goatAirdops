import React from "react";
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container" id="#home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-text-section d-flex justify-content-center align-items-center " >
          <h1 className="primary-heading">
          Your Headphones made smart
          </h1>
          <p className="primary-text">
          Nirvana  751 ANC  Just  4,499</p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
