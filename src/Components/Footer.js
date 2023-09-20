import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        <h1 className="logo-goat" >Goat Airdops</h1> 
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span>Shop by Features</span>
          <span>Shop by Price</span>
          <span>Soundbars</span>
          <span>Limited Editions</span>
          <span>Quality</span>
          <span>Rankings</span>
        </div>
        <div className="footer-section-columns">
        <span>123-2343-6789</span>
          <span>hello@goat.com</span>
          <span>press@goat.com</span>
          <span>contact@goat.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
