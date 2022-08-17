import React, { useState } from "react";
import "./Sort.scss";
import filterBarLogo from "../../Images/Icon.svg";
import searchBarLogo from "../../Images/search.svg";

const Sort = ({ optiondata, data, setData, value, onchange }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="search-bar-filter">
      <div className="bar-search">
        <input
          className="bar-search-data"
          name="Search"
          value={value}
          onChange={onchange}
          placeholder="Search..."
          type="text"
        />
        <img
          alt="share-icon"
          className="search-icon-image-sort"
          src={searchBarLogo}
        />
      </div>
      <div className="filter-bar-data">
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="sort-filter-wrapper"
        >
          <img
            alt="share-icon"
            src={filterBarLogo}
            className="filter-logo-img"
          ></img>
          {data}
          {isActive && (
            <div className="content-container">
              {optiondata.map((option) => (
                <>
                  <div
                    onClick={() => {
                      setData(option);
                    }}
                    className="filter-item"
                  >
                    {option}
                    <div className="sort-circle" />
                    <div className="sort-circle-colored"></div>
                  </div>
                </>
              ))}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sort;
