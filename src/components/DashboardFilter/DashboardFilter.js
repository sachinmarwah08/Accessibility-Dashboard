import React, { useRef, useState } from "react";
import "./DashboardFilter.scss";
import Modal from "../Modal/Modal";
import filterBarLogo from "../../Images/Icon.svg";

const DashboardFilter = () => {
  const [isActive, setIsActive] = useState(false);

  const headerRef = useRef();
  if (typeof document !== `undefined`) {
    document.addEventListener("scroll", function () {
      if (headerRef.current) {
        const documentTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (documentTop > 0)
          headerRef.current.classList.add("hide-filter-icon");
        else headerRef.current.classList.remove("hide-filter-icon");
      }
    });
  }
  return (
    <>
      {isActive && (
        <Modal dashboardFilter={isActive} closeModal={setIsActive} />
      )}
      <div
        onClick={() => setIsActive(!isActive)}
        className="filters-option-icon"
      >
        <h1 className="heading">Filters</h1>
      </div>
      <div
        ref={headerRef}
        onClick={() => setIsActive(!isActive)}
        className="left-side-filter-option"
      >
        <img
          alt="share-icon"
          src={filterBarLogo}
          className="filter-logo-option"
        ></img>
      </div>
    </>
  );
};

export default DashboardFilter;
