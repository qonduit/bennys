import React from "react";
import "./styling/global.css";
import "./styling/header.css";
import logo from '../static/logo.svg';

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} className="header-logo" alt="logo" />
      <div className="header-navbar-container">
        <div className="header-navbar-element">MENU</div>
        <div className="header-navbar-element">CONTACT</div>
      </div>
    </div>
  );
};

export default Header;
