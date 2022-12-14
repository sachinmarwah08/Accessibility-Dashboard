import React, { useState } from "react";
import "./Sort.scss";
import filterBarLogo from "../../Images/Icon.svg";
import searchBarLogo from "../../Images/search.svg";
// import RadioButton from "../RadioButton/RadioButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sort = ({
  dropdownOptions,
  data,
  setData,
  value,
  onchange,
  filterData,
  clearData,
}) => {
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

        {filterData ? (
          <FontAwesomeIcon
            onClick={clearData}
            className="close-icon-image"
            icon={faXmark}
          />
        ) : (
          <img
            alt="share-icon"
            className="search-icon-image-sort"
            src={searchBarLogo}
          />
        )}
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
              {dropdownOptions.map((option) => (
                <>
                  <div
                    onClick={() => {
                      setData(option);
                    }}
                    className="filter-item"
                  >
                    {option}

                    <div className="sort-circle">
                      {data === option && (
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
    </div>
  );
};

export default Sort;
