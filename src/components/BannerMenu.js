import React, { Component } from "react";
import menuPhoto from "../static/fish.jpg";
import "./styling/banner.css";
import { Link } from "react-router-dom";

class BannerMenu extends Component {
  render() {
    return (
      <div className="banner-container">
        <Link to="/menu" className="banner-image">
          <img src={menuPhoto} className="banner-image" alt="team" />
        </Link>
        <Link to="/menu" className="banner-text">
          <div className="banner-text">MENU</div>
        </Link>
      </div>
    );
  }
}

export default BannerMenu;
