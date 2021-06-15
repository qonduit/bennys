import React, { Component } from "react";
import teamPhoto from "../static/bennys-team.jpg";
import "./styling/banner.css";

class BannerAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner-container">
        <img
          src={teamPhoto}
          className="banner-image"
          alt="team"
          onClick={() => this.props.setDisplayViewState("contact")}
        />
        <div
          className="banner-text"
          onClick={() => this.props.setDisplayViewState("contact")}
        >
          ABOUT
        </div>
      </div>
    );
  }
}

export default BannerAbout;
