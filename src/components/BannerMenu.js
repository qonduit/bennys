import React, { Component } from "react";
import menuPhoto from "../static/fish.jpg";
import "./styling/banner.css";

class BannerMenu extends Component {
  render() {
    return (
      <div className="banner-container">
        <img
          src={menuPhoto}
          className="banner-image"
          alt="team"
          onClick={() => this.props.setDisplayViewState("menu")}
        />
        <div
          className="banner-text"
          onClick={() => this.props.setDisplayViewState("menu")}
        >
          MENU
        </div>
      </div>
    );
  }
}

export default BannerMenu;
