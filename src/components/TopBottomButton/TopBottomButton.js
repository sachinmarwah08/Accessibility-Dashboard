import React, { useState } from "react";
import sortDown from "../../Images/bi_sort-down.svg";
import "./TopBottomButton.scss";

const TopBottomButton = () => {
  const [isActive, setIsActive] = useState(false);
  const topBottomData = ["Top 10", "Bottom 10"];
  const [topBottom, setTopBottom] = useState("Top 10");

  return (
    <div className="btn-wrapper">
      <button onClick={() => setIsActive(!isActive)} className="btn-container">
        <img src={sortDown} />
        <p className="btn-heading">{topBottom}</p>

        {isActive && (
          <div className="content-container">
            {topBottomData.map((option) => (
              <>
                <div
                  onClick={() => {
                    setTopBottom(option);
                  }}
                  className="filter-item"
                >
                  {option}

                  <div className="sort-circle">
                    {topBottom === option && (
                      <div className="sort-circle-colored"></div>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default TopBottomButton;
