import React from "react";

import StockImage from "./StockImage";

function Skills() {
  return (
    <div id="skills" className="section">
      <h2>Skills Section</h2>
      <div className="upper-area">
        <div className="skill-text" id="frontend">
          <h3>Frontend Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <StockImage />
        <div className="skill-text" id="backend">
          <h3>Backend Skills</h3>
          <ul>
            <li>Python</li>
            <li>Node.JS</li>
            <li>Nginx</li>
            <li>Amazon Web Services</li>
          </ul>
        </div>
      </div>
      <div className="lower-area">
        <h3>General Skills</h3>
        <ul>
          <li>skill 1</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
