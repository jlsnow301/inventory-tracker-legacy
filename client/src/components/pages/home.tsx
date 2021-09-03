import React from "react";

import "../css/static-page.css";

const Home: React.FC = () => {
  return (
    <div className="static-main">
      <div className="static-intro">
        <h1>home</h1>
      </div>
      <div className="static-box">
        <div className="static-text">
          <h1 style={{ color: "var(--peach)", paddingLeft: 15 }}>
            Welcome to the Program
          </h1>
          <ul>
            <li style={{ marginBottom: 10 }}>
              Its design is simple: Create a modular inventory management
              interface for business applications. All functionality is locked
              behind a login.
            </li>
            <li style={{ marginBottom: 10 }}>
              Crafted with care by four students fulfilling their bachelor's
              degree: Andy, Margarita, Selena, Jeremiah. We collaborated via
              GitHub to build a working website application while our classes
              continued remotely during quarantine 2020. All four have since
              graduated, July 2021.
            </li>
            <li style={{ marginBottom: 10 }}>
              This website was built using TypeScript React, all in modern ES6
              syntax with React Hooks and Stateless Functional Components. The
              backend was previously written in Node(JS), but is being
              retrofitted to Deno, a TypeScript Node alternative.
            </li>
            <li style={{ marginBottom: 10 }}>
              For most, this was a learning experience in the frustration of
              technology unfamiliar. There were many "aha" moments, many points
              of frustration, but all culminated to a successful project
              demonstration to the class which resulted in a 4.0. The team
              worked tirelessly and learned GitHub for the very first time, as
              all four had been solo programming in white-on-black terminals
              since the beginning of the computer science course.
            </li>
          </ul>
        </div>
        <div className="static-photos">
          <img src="./public/pexels-tiger-lily-4487383.jpg" alt="Warehouse" />
        </div>
      </div>
    </div>
  );
};

export default Home;
