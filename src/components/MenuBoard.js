import React, { Component } from "react";
import MenuCard from "./MenuCard.js";
import "./styling/menu.css";

class MenuBoard extends Component {
  render() {
    return (
      <div className="menu-container">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    );
  }
}

export default MenuBoard;
