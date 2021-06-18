import React, { Component } from "react";
import "./styling/header.css";
import logo from "../static/logo.svg";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/home" className="header-navbar-logo">
          <img
            src={logo}
            className="header-navbar-logo"
            alt="logo"
            // onClick={() => this.props.setDisplayViewState("home")}
          ></img>
        </Link>
        <div className="header-navbar-container">
          <Link className="header-navbar-element" to="/menu">
            <div
              className="header-navbar-element"
              // onClick={() => this.props.setDisplayViewState("menu")}
            >
              MENU
            </div>
          </Link>
          <Link className="header-navbar-element" to="/contact">
          <div
            className="header-navbar-element"
            // onClick={() => this.props.setDisplayViewState("contact")}
          >
            CONTACT
          </div></Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
