import React from "react";
import teamPhoto from "../static/bennys-team.jpg";
import "./styling/banner.css";

const BannerAbout = () => {
  return (
    <div className="banner-container">
      <img src={teamPhoto} className="banner-image" alt="team" />
      <div className="banner-text">ABOUT</div>
    </div>
  );
};

export default BannerAbout;
