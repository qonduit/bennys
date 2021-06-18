import React, { Component } from "react";
import contactPhoto from "../static/contact.jpg";
import facebookLogo from "../static/facebook-logo.svg";
import "./styling/contact.css";

class Contact extends Component {
  render() {
    return (
        <div className="contact-container">
          <img src={contactPhoto} className="contact-image" alt="contact" />
          <div className="contact-about-text">
            Benny's Bar B.Q is a local family run fish and chip restaurant where
            we pride ourselves on delivering exemplary food, with great value
            for money whilst giving you the best of our family business's
            customer service. We have been on Haverhill high street for multiple
            generations and we value our customers over everything else.
          </div>
          <a href="tel:+441440702501" className="phone-link">
            Order by telephone:
            <br />
            01440 702 501
          </a>
          <a
            href="https://www.facebook.com/Bennys-Bar-B-Q-193715330807075"
            className="facebook-link"
          >
            <img src={facebookLogo} alt="facebook" className="facebook-logo" />
            <br />
            <div>Check us out on Facebook!</div>
          </a>
        </div>
    );
  }
}

export default Contact;
