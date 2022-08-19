import React, { useState } from "react";
import "./BarChart.scss";
import Highcharts from "highcharts";
import Sort from "../../SortFilter/Sort";
import HighchartsReact from "highcharts-react-official";
import data from "./data";
import shareIcon from "../../../Images/share-2.svg";
import RadioButton from "../../RadioButton/RadioButton";
import TopBottomButton from "../../TopBottomButton/TopBottomButton";

const BarChartComponent = () => {
  const barData = ["Influencer", "Hashtag"];
  const [bardata, setBardata] = useState("Filter");
  const [isRadioChecked, setIsRadioChecked] = useState(1);

  const handleRadioChange = (value) => {
    setIsRadioChecked(value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="bar-heading-wrapper">
            <div className="heading-left">
              <h1 className="heading">
                Countries Rankings by Accessibility
                {isRadioChecked === 1 ? " Interest" : " Sentiment"}
              </h1>
            </div>
            <div className="btn-share">
              <button className="share-btn">
                <img
                  className="sharetwo"
                  alt="share-icon-bar"
                  src={shareIcon}
                />
              </button>
            </div>
          </div>

          <div className="radio-bar-btn">
            <RadioButton
              radioName="Bar"
              userId="radioForInterest"
              name="Interest"
              checked={isRadioChecked}
              value={1}
              onchange={handleRadioChange}
            />
            <RadioButton
              radioName="Bar"
              userId="radioForSentiment"
              name="Sentiment"
              checked={isRadioChecked}
              value={2}
              onchange={handleRadioChange}
            />
          </div>
          <div className="filter-container">
            <TopBottomButton />
            <Sort setData={setBardata} data={bardata} optiondata={barData} />
          </div>
        </div>
        <div className="bar-chart-wrapper">
          <div className="chart-bar">
            <HighchartsReact highcharts={Highcharts} options={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChartComponent;
