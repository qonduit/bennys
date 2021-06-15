import React, { Component } from "react";
import NavBar from "../components/NavBar.js";
import BannerAbout from "../components/BannerAbout.js";
import BannerMenu from "../components/BannerMenu.js";
import "../components/styling/global.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.NavBar = React.createRef();
    this.state = {
      displayView: "",
    };
  }
  updateView = () => {
    const currentNavBar = this.NavBar.current;
    console.log(currentNavBar.state.view);
    // if (this.state.currentNavBar === "homePage") {
    //   this.setState({
    //     displayView: (
    //       <div>
    //         <BannerAbout />
    //         <BannerMenu />
    //       </div>
    //     ),
    //   });
    // }
  };
  componentWillMount() {
    this.updateView();
  }
  render() {
    return (
      <div>
        <NavBar ref={this.NavBar} />
        {this.state.displayView}
      </div>
    );
  }
}

export default HomePage;
