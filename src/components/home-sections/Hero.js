import React from "react";

import StockImage from "./StockImage";

function Hero() {
  return (
    <div id="hero" className="section">
      <div className="text-area">
        <h1>Andrew Ras</h1>
        <span>Empowering small businesses with reliable, high quality websites</span>
      </div>
      <StockImage />
    </div>
  );
}

export default Hero;
