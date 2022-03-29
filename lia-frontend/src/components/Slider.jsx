import React from "react";
import { useState, useRef } from "react";
import Styles from "./Slider.module.css";

function Slider(props) {
  const currentSliderRef = useRef();
  const [currentValue, setCurrentValue] = useState(props.value);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(currentSliderRef.current.value);
  };
  const onChangeHandler = (e) => {
    setCurrentValue(e.target.value);

  };
  return (
    <div className={Styles.sliderBox}>
      <form onSubmit={submitHandler} className={Styles.sliderForm}>
        <input
          className={Styles.slider}
          onChange={onChangeHandler}
          type="range"
          min={props.min}
          step={props.step}
          max={props.max}
          value={currentValue}
          ref={currentSliderRef}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Slider;
