import React from "react";
import menuPhoto from "../static/fish.jpg";
import "./styling/banner.css";

const BannerMenu = () => {
  return (
    <div className="banner-container menu-banner">
      <img src={menuPhoto} className="banner-image" alt="team" />
      <div className="banner-text">MENU</div>
    </div>
  );
};

export default BannerMenu;
