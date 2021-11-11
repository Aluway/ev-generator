import React from "react";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav__container">
      <nav className="navbar">
        <div className="nav__wrapper">
          <div className="logo">EV Logo</div>
          <ul className="nav__menu">
            <li className="menu__item">Tweet-tweet</li>
            <li className="menu__item">Woof</li>
            <li className="menu__item">Meow</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
