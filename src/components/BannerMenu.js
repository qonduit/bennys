import React, { Component } from "react";
import menuPhoto from "../static/fish.jpg";
import "./styling/banner.css";
import { Link } from "react-router-dom";

class BannerMenu extends Component {
  render() {
    return (
      <div className="banner-container">
        <Link to="/menu" className="banner-image"><img
          src={menuPhoto}
          className="banner-image"
          alt="team"
          onClick={() => this.props.setDisplayViewState("menu")}
        /></Link>
        <Link to="/menu" className="banner-text"><div
          className="banner-text"
          onClick={() => this.props.setDisplayViewState("menu")}
        >
          MENU
        </div></Link>
      </div>
    );
  }
}

export default BannerMenu;
