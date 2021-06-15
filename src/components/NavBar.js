import React, { Component } from "react";
import "./styling/global.css";
import "./styling/header.css";
import logo from "../static/logo.svg";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.navigateTo = this.navigateTo.bind(this);
    this.state = {
      view: "homePage",
    };
  }
  // navigateTo = (page) => {
  //   this.setState({ view: page });
  // };
  render() {
    return (
    <div>
      <div className="header-container">
        <img
          src={logo}
          className="header-logo"
          alt="logo"
          // onClick={this.navigateTo('homePage')}
        />
        <div className="header-navbar-container">
          <div
            className="header-navbar-element"
            // onClick={this.navigateTo('menu')}
          >
            MENU
          </div>
          <div
            className="header-navbar-element"
            // onClick={this.navigateTo('contact')}
          >
            CONTACT
          </div>
        </div>
      </div>
    </div> );
  }
}

export default NavBar;

// const NavBar = () => {
//   const [navigation, setNavigation] = useState("homePage");

//   let renderedPage = <div>default</div>;
//   let homePage = (
//     <div className="header-container">
//       <img src={logo} className="header-logo" alt="logo" />
//       <div className="header-navbar-container">
//         <div className="header-navbar-element">MENU</div>
//         <div className="header-navbar-element">CONTACT</div>
//       </div>
//     </div>
//   );
//   const pageRender = () => {
//     if (navigation === "homePage") {
//       let renderedPage = homePage;
//       console.log(navigation);
//       console.log(renderedPage);
//     }
//   };

//   useEffect(() => {
//     pageRender();
//   });

//   return <div>{renderedPage}</div>;
// };

// export default NavBar;
