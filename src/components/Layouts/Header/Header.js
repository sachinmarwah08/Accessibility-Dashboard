import React from "react";
import "./Header.scss";
import logo from "../../../Images/logo.svg";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <header className="header-container">
      <div className="main-content">
        <div className="logo">
          <img
            onClick={navigateHome}
            alt="logo"
            className="logo-image"
            src={logo}
          ></img>
        </div>
        <div className="links">
          <div className="links-data">
            <div className="icon-button">About</div>
            <div className="icon-button">Cities</div>
            <div className="icon-button">
              Market Place
              <div className="icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className="icon-button">
              Resources
              <div className="icon">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div>Interviews</div>
            <div className="icon-button">Covid-19</div>
            <button className="join-free-button">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
