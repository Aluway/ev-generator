import React from "react";

import "./CheckBox.scss";

function CheckBox(props) {
  return (
    <div className="checkbox__ind_wrapper">
      <label htmlFor={props.improveId}>{props.improveParam}</label>
      <input
        disabled={props.disabled && props.improveId !== props.checked}
        onChange={(e) => props.changeParam(e, props.param)}
        type="checkbox"
        id={props.improveId}
        name={props.improveName}
        value={props.improveId}
      ></input>
    </div>
  );
}

export default CheckBox;
