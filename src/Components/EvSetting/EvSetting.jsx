import React, { useState } from "react";

import Button from "../utility/Button";
import Radio from "../utility/Radio";

import { useDispatch } from "react-redux";
import submitForm from "../../actions/submitForm";

import "./EvSetting.scss";

function EvSetting() {
  const dispatch = useDispatch();

  const [studentName, setStudentName] = useState("");
  const [additions, setAdditions] = useState("");
  const [consParam, setConsParam] = useState("reading");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(studentName, additions, consParam));
  };

  return (
    <div className="setting__container">
      <form
        onSubmit={handleSubmit}
        className="setting__form"
        id="setting__form"
      >
        <div className="form__class-info">
          <h3>Class info</h3>
          <div className="form__input_wrapper form__input_names">
            <label htmlFor="input__student_name">Student's name</label>
            <input
              required
              onChange={(e) => setStudentName(e.target.value)}
              type="text"
              id="input__student_name"
              name="input__student_name"
            />
          </div>
          <div className="form__input_wrapper form__input_additions">
            <label htmlFor="input__course_addition">Additions</label>
            <textarea
              required
              onChange={(e) => setAdditions(e.target.value)}
              type="text"
              id="input__course_addition_id"
              name="input__course_addition_name"
            />
          </div>
        </div>
        <div className="improve__wrapper">
          <h3>What to improve?</h3>
          <Radio required checked={consParam} changeParam={setConsParam} />
        </div>
        <div className="form__buttons_wrapper">
          <Button
            formId={"setting__form"}
            buttonType={"submit"}
            buttonText={"Evaluate"}
          />
        </div>
      </form>
    </div>
  );
}

export default EvSetting;
