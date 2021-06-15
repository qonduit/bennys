import React, { Component } from "react";
import NavBar from "../components/NavBar.js";
import BannerAbout from "../components/BannerAbout.js";
import BannerMenu from "../components/BannerMenu.js";
import "../components/styling/global.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.setDisplayViewState = this.setDisplayViewState.bind(this);
    this.state = {
      displayView: "homePage",
    };
  }

  setDisplayViewState = (newView) => {
    this.setState({ displayView: newView });
  };

  render() {
    let renderedView = <div></div>;
    if (this.state.displayView === "homePage") {
      renderedView = (
        <div>
          <BannerAbout setDisplayViewState={this.setDisplayViewState} />
          <BannerMenu setDisplayViewState={this.setDisplayViewState} />
        </div>
      );
    }
    return (
      <div>
        <NavBar setDisplayViewState={this.setDisplayViewState} />
        {renderedView}
      </div>
    );
  }
}

export default HomePage;
