import React, { useState } from "react";
import "./DashboardFilter.scss";
import Modal from "../Modal/Modal";

const DashboardFilter = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive && (
        <Modal dashboardFilter={isActive} closeModal={setIsActive} />
      )}
      <div onClick={() => setIsActive(!isActive)} className="filters">
        <h1 className="heading">Filters</h1>
      </div>
    </>
  );
};

export default DashboardFilter;
