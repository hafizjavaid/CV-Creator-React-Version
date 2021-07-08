import React, { useState } from "react";
import { HeaderLinks, logoText, menuIcon} from "../ResumeData";
// import Scrollspy from "react-scrollspy";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
 
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">
          {" "}
          {logoText}{" "}
        </a>
        <div
          className={`nav__menu ${showNav ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {HeaderLinks.map((link, i) => (
              <li className="nav__item" key={i}>
                <a href={`#${link.linkID}`} onClick={()=> setShowNav(false)} className="nav__link">
                  <i className={`nav__icon bx ${link.boxIcon}`} />
                  {link.linkText}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="nav__toggle"
          onClick={() => setShowNav(!showNav)}
          id="nav-toggle"
        >
          <i className={`bx ${menuIcon}`} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
