import React from "react";
import "./GlobalWellbeing.scss";

const GlobalWellbeing = () => {
  return (
    <div className="main-container">
      <div className="left-content">
        <h1 className="heading">Global Accessibility Index</h1>
      </div>
      <div className="right-content">
        <div className="right-border"></div>
        <div className="column-one">
          <p className="digit-one">1.01 MM</p>
          <p className="value-one">Current Day Value </p>
          <p className="date">As of 3 August, 2022</p>
        </div>
        <div className="column-two">
          <p className="column-two-digit-one">+0.5 MM</p>
          <p className="value-one-tilte">Absolute Change</p>
        </div>
        <div className="column-two">
          <p className="column-two-digit-one">+0.05%</p>
          <p className="value-one-tilte">Percentage Change</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalWellbeing;
