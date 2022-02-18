import React from "react";
import { useState, useRef } from "react";

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
    <div>
      <form onSubmit={submitHandler}>
        <input
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
