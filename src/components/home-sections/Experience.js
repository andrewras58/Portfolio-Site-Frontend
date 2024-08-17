import React from "react";

import ExperienceWidget from "./ExperienceWidget";

function Experience() {
  return (
    <div id="experience" className="section">
      <h2>Experience</h2>
      <ExperienceWidget
        image={require("../../assets/gals.png")}
        link="https://galscr.com"
        description="I worked with a court reporting agency to create their website."
        title="Global Access Litigation Services"
      />
    </div>
  );
}

export default Experience;
