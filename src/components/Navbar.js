import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
//import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <HashLink to="/#main" className="nav-header" onClick={() => {setMenuOpen(false)}}>Andrew Ras</HashLink>
      <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <HashLink to="/#about-skills" onClick={() => {setMenuOpen(false)}}>About</HashLink>
        </li>
        <li>
          <HashLink to="/#contact" onClick={() => {setMenuOpen(false)}}>Contact</HashLink>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1xX5EmzYW7QSLxUJstistVzXE6fol1fU5d7OqlQdqPFs/edit?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
