import React from "react";

import "./Radio.scss";

function Radio(props) {
  return (
    <div className="radio__wrapper">
      <label>
        <input
          type="radio"
          value="reading"
          checked={props.checked === "reading"}
          onChange={(e) => props.changeParam(e.target.value)}
        />
        Reading
      </label>
      <label>
        <input
          type="radio"
          value="speaking"
          checked={props.checked === "speaking"}
          onChange={(e) => props.changeParam(e.target.value)}
        />
        Speaking
      </label>
      <label>
        <input
          type="radio"
          value="vocabulary"
          checked={props.checked === "vocabulary"}
          onChange={(e) => props.changeParam(e.target.value)}
        />
        Vocabulary
      </label>
      <label>
        <input
          type="radio"
          value="grammar"
          checked={props.checked === "grammar"}
          onChange={(e) => props.changeParam(e.target.value)}
        />
        Grammar
      </label>
      <label>
        <input
          type="radio"
          value="none"
          checked={props.checked === "none"}
          onChange={(e) => props.changeParam(e.target.value)}
        />
        None
      </label>
    </div>
  );
}

export default Radio;
