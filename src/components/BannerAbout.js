import React, { Component } from "react";
import teamPhoto from "../static/bennys-team.jpg";
import "./styling/banner.css";
import { Link } from "react-router-dom";

class BannerAbout extends Component {
  render() {
    return (
      <div className="banner-container about-banner">
        <Link to="/contact" className="banner-image">
          <img src={teamPhoto} className="banner-image" alt="team" />
        </Link>
        <Link to="/contact" className="banner-image" className="banner-text">
          <div className="banner-text">ABOUT</div>
        </Link>
      </div>
    );
  }
}

export default BannerAbout;
