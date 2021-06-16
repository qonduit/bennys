import React, { Component } from "react";
import "./styling/menu.css";

class MenuCard extends Component {
  render() {
    return (
      <div className="menu-card-container">
        <div className="menu-card-text-top">{this.props.item}</div>
        <img src={this.props.photo} className="menu-card-image" alt="food" />
        <div className="menu-card-text-bottom">{this.props.price}</div>
      </div>
    );
  }
}

export default MenuCard;
