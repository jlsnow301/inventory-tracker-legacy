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
          The inventory manager is a web application design project by four
          students in Seattle, Washington. <br />
          Its design is simple: Create a modular inventory management interface
          for business application. All functionality is locked behind a login.
        </div>
      </div>

      <div className="static-photos">
        <img src="./public/pexels-tiger-lily-4487383.jpg" alt="Warehouse" />
      </div>
      <div className="static-line" />
    </div>
  );
};

export default Home;
