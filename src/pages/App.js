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
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.setDisplayViewState = this.setDisplayViewState.bind(this);
    this.state = {
      displayView: "home",
      redirect: null,
    };
  }

  setDisplayViewState = (newView) => {
    this.setState({ displayView: newView, redirect: newView });
  };

  render() {
    // let renderedView = <div></div>;
    // if (this.state.displayView === "home") {
    //   renderedView = (
    //     <div>
    //       <BannerAbout setDisplayViewState={this.setDisplayViewState} />
    //       <BannerMenu setDisplayViewState={this.setDisplayViewState} />
    //     </div>
    //   );
    //   if (this.state.redirect) {
    //     return (
    //       <Router>
    //         <Redirect to={this.state.redirect} />
    //       </Router>
    //     );
    //   }
    // } else if (this.state.displayView === "menu") {
    //   renderedView = (
    //     <div>
    //       <MenuBoard />
    //     </div>
    //   );
    // } else if (this.state.displayView === "contact") {
    //   renderedView = (
    //     <div>
    //       <Contact />
    //     </div>
    //   );
    // }
    return (
      <Router>
        <NavBar setDisplayViewState={this.setDisplayViewState} />
        <div>
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
        </div>
      </Router>
    );
  }
}

export default App;
