import React from "react";
import ProfilePic from "../Assets/user.png";
import { AiFillStar } from "react-icons/ai";

const Rankings = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Rankings</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Sailing across the nation and Beyond</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Love adventure? Airdopes are here for you. The IPX rating ensures all the mechanical parts are tightly enclosed in an airtight housing that prevents water, sweat from seeping into the earbuds. No longer do you have to worry about damaging a device. Airdopes are rugged and sturdy, able to take on anything that is thrown at it. Make the best of your day without worry.</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jackie Pandian</h2>
      </div>
    </div>
  );
};

export default Rankings;
