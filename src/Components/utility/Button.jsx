import React from "react";

import "./Button.scss";

function Button(props) {
  return (
    <button
      onClick={props.handleClick}
      form={props.formId}
      type={props.buttonType}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
