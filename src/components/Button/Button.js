import React, { useState } from "react";
import "./Button.scss";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ selected, setSelected, options, disabled }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        style={disabled ? { cursor: "not-allowed" } : {}}
        onClick={disabled ? () => {} : (e) => setActive(!isActive)}
        className="dropdown-btn"
      >
        {selected}
        {!isActive ? (
          <FontAwesomeIcon className="grey" icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} />
        )}
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;
