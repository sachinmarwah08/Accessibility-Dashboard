import React from "react";
import addOne from "../../../Images/image14.svg";
import addTwo from "../../../Images/image 15.svg";
import addThree from "../../../Images/image 16.svg";
import addFour from "../../../Images/image 17.svg";
import addFive from "../../../Images/image 18.svg";
import "./Caraosel.scss";

const data = [
  {
    id: 1,
    image: addOne,
  },
  {
    id: 2,
    image: addTwo,
  },
  {
    id: 3,
    image: addThree,
  },
  {
    id: 4,
    image: addFour,
  },
  {
    id: 5,
    image: addFive,
  },
];

const Caraosel = () => {
  return (
    <div className="caraosel-container">
      <div className="content-outer">
        {data.map((item) => (
          <img src={item.image} className="content"></img>
        ))}
      </div>
      <div className="dot-container">
        <div className="dot-colored"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Caraosel;
