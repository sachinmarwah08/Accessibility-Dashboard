import React from "react";
import "./Footer.scss";
import logo from "../../../Images/footerLogo.svg";
import Caraosel from "./Caraosel";
import linkDin from "../../../Images/linkedin.svg";
import facebook from "../../../Images/facebook.svg";
import twitter from "../../../Images/twitter.svg";
import youtube from "../../../Images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo">
          <img alt="footer-logo" className="logo" src={logo} />
        </div>
        <div className="content-footer">
          <div className="left-footer-content">
            <h1 className="heading">about us</h1>
            <p className="content">
              citiesabc is a digital transformation platform to empower, guide
              and index cities. citiesabc was created a team of global industry
              leaders, academics and experts that is creating new solutions,
              lists, rankings and connections for the world top cities and
              populations. citiesabc offers the best of innovation in 4ir,
              digital transformation, blockchain, ai, smart cities technologies
              and big data.
            </p>
          </div>
          <div className="right-footer-content">
            <p className="heading">stay in the picture, join our newsletter</p>
            <div className="email-wrapper">
              <input className="email" type="text" placeholder="email" />
              <button className="subscribe">Subscribe</button>
            </div>
            <div className="contact">
              <p className="heading">
                Contact us: <span className="info">info@citiesabc.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer-container">
        <div className="second-footer-content">
          <h1 className="heading">in partnership with</h1>

          <Caraosel />
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-label">
          copyright 2020 © citiesabc powered by
          <span className="copyright-colored">techabc</span>
        </div>
        <div className="social-icon">
          <img alt="linkedin" className="icon" src={linkDin} />
          <img alt="facebook" className="icon" src={facebook} />
          <img alt="twitter" className="icon" src={twitter} />
          <img alt="youtube" className="icon" src={youtube} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
