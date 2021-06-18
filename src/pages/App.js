import React, { Component } from "react";
import NavBar from "../components/NavBar.js";
import BannerAbout from "../components/BannerAbout.js";
import BannerMenu from "../components/BannerMenu.js";
import MenuBoard from "../components/MenuBoard.js";
import Contact from "../components/Contact.js";
import "../components/styling/global.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar setDisplayViewState={this.setDisplayViewState} />
          <Switch>
            <Route path="/menu">
              <MenuBoard />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path={["", "/home"]}>
              <BannerAbout setDisplayViewState={this.setDisplayViewState} />
              <BannerMenu setDisplayViewState={this.setDisplayViewState} />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
