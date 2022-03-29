import React from "react";
// import Styles from "./Stepper.module.css";

function Stepper(props) {
  return (
    <div className="stepper">
      <div
        className={`stepper-item 
        ${props.progress === "1" ? "active" : ""}
        ${parseInt(props.progress) > 1 ? "completed" : ""}
        `}
      >
        <div className="step-counter">{props.progress === "1" ? "1" : "✔"}</div>
        <div className="step-label">Market</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "2" ? "active" : ""}
        ${parseInt(props.progress) > 2 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 2 ? "2" : "✔"}
        </div>
        <div className="step-label">Application</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "3" ? "active" : ""}
        ${parseInt(props.progress) > 3 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 3 ? "3" : "✔"}
        </div>
        <div className="step-label">Conditions</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "4" ? "active" : ""}
        ${parseInt(props.progress) > 4 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 4 ? "4" : "✔"}
        </div>
        <div className="step-label">Service life</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "5" ? "active" : ""}
        ${parseInt(props.progress) > 5 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 5 ? "5" : "✔"}
        </div>
        <div className="step-label">Power consumption</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "6" ? "active" : ""}
        ${parseInt(props.progress) > 6 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 6 ? "6" : "✔"}
        </div>
        <div className="step-label">Selection</div>
      </div>
    </div>
  );
}

export default Stepper;
