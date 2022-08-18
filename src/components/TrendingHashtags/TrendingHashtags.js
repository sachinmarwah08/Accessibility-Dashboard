import React from "react";
import "./TrendingHashtags.scss";
import { data } from "./data";

const TrendingHashtags = () => {
  return (
    <div className="trend-wrapper">
      <div className="content">
        <div className="heading">Trending Hashtags</div>
        <div className="hashtags-wrapper">
          {/* {data.map((item) => (
            <div key={item.id} className="hashtags-data">
              {item.hashtags}
            </div>
          ))} */}

          <div className="line-one">
            <p className="one">#strength</p>
          </div>
          <div className="line-two">
            <p className="two-one">#allaboutus</p>
            <p className="two-two">#seattleseahawks</p>
            <p className="two-three">#bnb</p>
            <p className="two-four">#SDGS</p>
            <p className="two-five">#Accessiblity</p>
          </div>
          <div className="line-three">
            <p className="three-one">#love</p>
            <p className="three-two">#immunotherapy</p>
            <p className="three-three">#bmtsm</p>
            <p className="three-four">#nature</p>
            <p className="three-five">#Tech4Good</p>
            <p className="three-six">#family</p>
          </div>
          <div className="line-four">
            <p className="four-one">#wellness</p>
            <p className="four-two">#cart</p>
            <p className="four-three">#us</p>
          </div>
          <div className="line-five">
            <p className="five-one">#Accessibility</p>
            <p className="five-two">#genetherapy</p>
            <p className="five-three">#ash21</p>
            <p className="five-four">#smile</p>
            <p className="five-five">#inspiration</p>
          </div>
          <div className="line-six">
            <p className="six-one">#mindfulness</p>
            <p className="six-two">#together</p>
            <p className="six-three">#SDGS</p>
            <p className="six-four">#spiritual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHashtags;
