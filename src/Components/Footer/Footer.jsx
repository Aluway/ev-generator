import React from "react";

import "./Footer.scss";
import logo from "../../misc/icons/GitHub-Mark-Light-32px.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="link__container">
          <img className="link__logo" src={logo} alt="icon" />
          <a
            className="link__text"
            href="https://github.com/Aluway"
            target="_blank"
            rel="noreferrer"
          >
            Aluway
          </a>
        </div>
        <div>v.0.8101121</div>
      </div>
    </div>
  );
}

export default Footer;
