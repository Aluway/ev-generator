import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";
import logo from "../../misc/icons/logo.png";

function NavBar() {
  return (
    <div className="nav__container">
      <nav className="navbar">
        <div className="nav__wrapper">
          <NavLink to="/ev-generator">
            <div className="logo">
              <img className="logo__img" src={logo} alt="ev_logo" />
              <div>Ev generator</div>
            </div>
          </NavLink>
          <ul className="nav__menu">
            <NavLink to="ev-generator/about" className="menu__item">
              About
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
