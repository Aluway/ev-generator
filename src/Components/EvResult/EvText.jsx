import React from "react";

import Button from "../utility/Button";

import "./EvText.scss";

function EvText(props) {
  const handleClick = () => {
    navigator.clipboard.writeText(props.text);
  };

  return (
    <div className="ev-text_wrapper">
      <form className="text__form" id={props.formId}>
        <div className="ev-text__head">
          <h4 className="ev-text__header">{props.header}</h4>
          <Button
            handleClick={handleClick}
            formId={props.formId}
            buttonType={"button"}
            buttonText={"Copy"}
          />
        </div>
        <textarea
          readOnly
          name={props.areaName}
          form={props.formId}
          value={props.text}
        />
      </form>
    </div>
  );
}

export default EvText;
