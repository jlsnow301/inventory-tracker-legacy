import React from "react";

import "../css/static-page.css";

const About: React.FC = () => {
  return (
    <div className="static-main">
      <div className="static-intro">
        <h1>about</h1>
      </div>
      <div className="static-services">
        <div className="static-box">
          <div className="static-serviceTitle">Members</div>
          <div className="static-text">
            Crafted with care by four students fulfilling their bachelor's
            degree: Andy, Margarita, Selena, Jeremiah. We collaborated via
            GitHub to build a working website application while our classes
            continued remotely during quarantine 2020. All four have since
            graduated, July 2021.
          </div>
        </div>
      </div>

      <div className="static-services">
        <div className="static-box">
          <div className="static-serviceTitle">Technology</div>
          <div className="static-text">
            This website was built using TypeScript React, all in modern ES6
            syntax with React Hooks and Stateless Functional Components. The
            backend was previously written in Node(JS), but is being retrofitted
            to Deno, a TypeScript Node alternative.
          </div>
        </div>
      </div>

      <div className="static-services">
        <div className="static-box">
          <div className="static-serviceTitle">Values Learned</div>
          <div className="static-text">
            For most, this was a learning experience in the frustration of
            technology unfamiliar. There were many "aha" moments, many points of
            frustration, but all culminated to a successful project
            demonstration to the class which resulted in a 4.0. The team worked
            tirelessly and learned GitHub for the very first time, as all four
            had been solo programming in white-on-black terminals since the
            beginning of the computer science course.
          </div>
        </div>
      </div>
      <div className="static-photos">
        <img src="./public/pexels-nic-wood-6432107.jpg" alt="Circuitry" />
      </div>
      <div className="static-line" />
    </div>
  );
};

export default About;
