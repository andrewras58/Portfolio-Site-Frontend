import React from "react";

import ExperienceWidget from "./ExperienceWidget";

function Experience() {
  return (
    <div id="experience" className="section">
      <h2>Experience</h2>
      <ExperienceWidget
        image={require("../../assets/gals.png")}
        link="https://galscr.com"
        description="I worked with a court reporting agency to develop and deploy their current website.
          It uses AWS EC2 as its host, bare HTML CSS and JS as the frontend, and Django as the backend with Nginx/Gunicorn acting as the webserver.
          I am still on call for any features they wish to add to the site, like E-Commerse options or updating content."
        time="June 2024"
        title="Global Access Litigation Services"
        technologies={[
          "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
          "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
          "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
          "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
          "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
          "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
          "https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white",
        ]}
      />
    </div>
  );
}

export default Experience;
