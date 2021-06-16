import React, { Component } from "react";
import MenuCard from "./MenuCard.js";
import "./styling/menu.css";
import fishPhoto from "../static/menu-1.jpg";
import sausagePhoto from "../static/menu-2.jpg";
import kebabPhoto from "../static/menu-3.jpg";

class MenuBoard extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-row-container">
          <MenuCard photo={fishPhoto} item={"Fish and Chips"} price={"£6.00"} />
          <MenuCard
            photo={sausagePhoto}
            item={"Sausage and Chips"}
            price={"£5.50"}
          />
          <MenuCard photo={kebabPhoto} item={"Mixed Kebab"} price={"£7.50"} />
        </div>
        <div className="menu-row-container">
          <MenuCard
            photo={sausagePhoto}
            item={"Sausage and Chips"}
            price={"£5.50"}
          />
          <MenuCard photo={kebabPhoto} item={"Mixed Kebab"} price={"£7.50"} />
          <MenuCard photo={fishPhoto} item={"Fish and Chips"} price={"£6.00"} />
        </div>
      </div>
    );
  }
}

export default MenuBoard;
