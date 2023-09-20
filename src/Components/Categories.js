import React from "react";
import Wired from "../Assets/wired.jpg";
import Airpods from "../Assets/airpods.jpg";
import Headphones from "../Assets/headphones.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Wired,
      title: "Wired",
      text: "Your Wired made Smart  Noise Cancellation Earphone , Long Playback Earphone & Clear Calling Earphone.",
    },
    {
      image: Airpods,
      title: "Airpods",
      text: "Let Your Style Talk Airpods Flex 453 ANC Manage Calls with Voice Prompts.",
    },
    {
      image: Headphones,
      title: "Headphones",
      text: "Innovative Stylish Elegent 50 Hours Playback",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Categories</p>
        <h1 className="primary-heading">Different Varaities</h1>
        <p className="primary-text">
        Explore Big Deals And Best Selleres </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
