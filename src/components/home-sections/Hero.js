import React from "react";

function Hero() {
  return (
    <div id="main" className="section">
      <h1>Andrew Ras</h1>
      <span>Hi, I'm a full stack developer who builds and manages websites.</span>
      <div className="buttons">
        <a className="link-button focus-bigger" href="/#about-skills">About Me</a>
        <a className="link-button focus-bigger" href="/#contact">Contact</a>
        <a className="link-button focus-bigger" href="https://docs.google.com/document/d/1xX5EmzYW7QSLxUJstistVzXE6fol1fU5d7OqlQdqPFs/edit?usp=sharing" target="_blank" rel="noreferrer">My Resume</a>
      </div>
    </div>
  );
}

export default Hero;
