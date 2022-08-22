import React, { useState } from "react";
import "./Modal.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Select from "react-select";

const Modal = ({ closeModal, dashboardFilter, linechartModal }) => {
  const notify = () => {
    navigator.clipboard.writeText("http://localhost:3000/LineChart");
    toast.success("Link Coppied...", {
      position: "top-right",
      autoClose: 500,
      hideProgressBa: true,
      newestOnTop: false,
      rtl: false,
      toastClassName: "dark-toast",
    });
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div
          className={`${dashboardFilter ? "filterModa-body" : "modal-body"}`}
        >
          <button className="modal-cloe-btn" onClick={() => closeModal(false)}>
            <FontAwesomeIcon className="x-mark" icon={faXmark} />
          </button>

          {dashboardFilter && (
            <div className="filter-modal-container">
              <div className="filter-modal-content">
                <div>
                  <DateRangePicker
                    rangeColors={["#990099", "#990099", "#990099"]}
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                  />
                </div>
                <div className="right-dropdown-filters">
                  <div className="search-wrapper">
                    <div className="search-one">
                      Influencer
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        placeholder={
                          <div className="select-placeholder-text">Select</div>
                        }
                        name="colors"
                        // options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="search-one">
                      Hashtags
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        placeholder={
                          <div className="select-placeholder-text">Select</div>
                        }
                        name="colors"
                        // options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="search-one">
                      Country
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        placeholder={
                          <div className="select-placeholder-text">Select</div>
                        }
                        name="colors"
                        // options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    {/* <div className="">
                    Hello
                    <Select
                      // defaultValue={[colourOptions[2], colourOptions[3]]}
                      isMulti
                      name="colors"
                      // options={colourOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div> */}
                  </div>
                </div>
              </div>

              <div className="submit-btn-wrapper">
                <button className="submit-btn" type="button">
                  Submit
                </button>
              </div>
            </div>
          )}

          {linechartModal && (
            <div className="LineChartmodal-content">
              <input
                readOnly
                value="http://localhost:3000/LineChart"
                type="text"
                className="component-link"
              />
              <button className="copy-btn" onClick={notify}>
                Copy Link
              </button>
              <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                toastClassName="dark-toast"
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
