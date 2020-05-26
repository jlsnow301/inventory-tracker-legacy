import React, { useState } from "react";
import styled from "@emotion/styled";
import Toolbar from "./components/toolbar/Toolbar";
import Dashboard from "./components/dashboard/Dashboard";

/* @Reminder - Readme.md has resources, use it
 *
 * @Todo
 * - Constructor will be needed
 * - build the views for home, about, contact
 * - Make the routes and views for:
 *   - Settings
 *   - Dashboard
 *   - Quick Start
 *
 */

const App = () => {
  // Styling
  const Body = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 10px 0px;
    justify-content: center;
  `;

  const [user, setUser] = useState({
    username: "Visitor",
    devmode: false,
    userImg: "./drugitol.png",
    loggedIn: false,
  });

  const changeUser = (u) => {
    setUser(u);
  };

  const props = { user, changeUser };

  // Returns
  return (
    <div>
      <div>
        <Toolbar props={props} />
      </div>
      <Body>
        <Dashboard props={props} />
      </Body>
    </div>
  );
};

export default App;
