import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AboutPage.scss";

import Button from "../../Components/utility/Button";
import Modal from "../../Components/Modal/Modal";

function AboutPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

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
          handleClick={handleModal}
          buttonText={"Changelog"}
        />
        <Button
          type={"button"}
          handleClick={() => navigate("/ev-generator")}
          buttonText={"Back to evaluation"}
        />
      </div>
      {isOpen && <Modal handleClick={handleModal} />}
    </div>
  );
}
export default AboutPage;
