import React, { Component } from "react";
import "./styling/header.css";
import logo from "../static/logo.svg";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <img
          src={logo}
          className="header-navbar-logo"
          alt="logo"
          onClick={() => this.props.setDisplayViewState("homePage")}
        />
        <div className="header-navbar-container">
          <div
            className="header-navbar-element"
            onClick={() => this.props.setDisplayViewState("menu")}
          >
            MENU
          </div>
          <div
            className="header-navbar-element"
            onClick={() => this.props.setDisplayViewState("contact")}
          >
            CONTACT
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
