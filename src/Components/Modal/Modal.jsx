import ReactDOM from "react-dom";
import { useContext } from "react";

import "./Modal.scss";
import { ModalContext } from "../Contexts/ModalContext";
import Button from "../utility/Button";

const Modal = (props) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  return ReactDOM.createPortal(
    <div className="modal__changelog">
      <div className="modal__wrapper">
        <h1 className="modal__header">Changelog</h1>

        <div className="info__wrapper">
          <h2 className="info__header">v.1.0161221</h2>
          <p className="info__text">
            In new version I've implemented several things and changed some of
            the features:
          </p>
          <ul className="info__features">
            <li className="info__feature">
              Changed checkboxes to radio buttons, because checkboxes were not
              pretty useful in the case, where you need to change only one
              position.
            </li>
            <li className="info__feature">
              Refactored NavBar and put "About" tab, where you can find some
              information about this project and why I made it.
            </li>
            <li className="info__feature">
              Added several buttons, which allow you to go back to evaluation
              page or check the changelog of this app.
            </li>
            <li className="info__feature">Added a fancy icon~</li>
          </ul>
          <h2 className="info__header">v.0.8101121</h2>
          <p className="info__text">
            That was a pre-release version of the app with the following
            features:
          </p>
          <ul className="info__features">
            <li className="info__feature">
              Name and Additions feature, which allow you to add a name and some
              additional info to the "Pros" part.
            </li>
            <li className="info__feature">
              "Pros" part, represented with 4 checkboxes, which allow you to
              choose and area of improvments to mention.
            </li>
            <li className="info__feature">
              Three text areas, where you have a generated evaluation for each
              of the evaluation parts: Pros, Cons and Ending.
            </li>
          </ul>
        </div>
        <div className="modal__close_wrapper">
          <Button
            buttonType="button"
            buttonText="Close"
            handleClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
