import React from "react";
import StockImage from "./StockImage";

function About() {
  return (
    <div id="about" className="section">
      <StockImage />
      <div className="text-area">
        <h2>About Section</h2>
        <span>Talk about myself (personal)</span>
      </div>
    </div>
  );
}

export default About;
