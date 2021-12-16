import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ModalContext } from "../../Components/Contexts/ModalContext";

import "./AboutPage.scss";

import Button from "../../Components/utility/Button";
import Modal from "../../Components/Modal/Modal";

function AboutPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about__wrapper">
      <h1 className="about__header">Ev generator</h1>
      <div className="about__text">
        I'm glad to introduce an evaluation generator, which was made to
        increase the speed of writing evaluations for my English classes using
        presets, which I've collected during my part-time job as an ESL teacher.
      </div>
      <div className="about__buttons">
        <Button
          type={"button"}
          handleClick={() => setIsOpen(!isOpen)}
          buttonText={"Changelog"}
        />
        <Button
          type={"button"}
          handleClick={() => navigate("/ev-generator")}
          buttonText={"Back to evaluation"}
        />
      </div>
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        {isOpen ? <Modal /> : null}
      </ModalContext.Provider>
    </div>
  );
}
export default AboutPage;
