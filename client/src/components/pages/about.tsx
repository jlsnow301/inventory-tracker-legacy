import React from "react";

import "../../css/about.css";

const About: React.FC = () => {
  return (
    <div className="about">
      <img
        className="about-banner"
        src="./public/aboutBanner.jpg"
        alt="about"
      />
    </div>
  );
};

export default About;
