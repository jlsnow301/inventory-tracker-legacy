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

  // Initial user state
  const [user, setUser] = useState({
    username: "Visitor",
    devmode: false,
    userImg: "./drugitol.png",
    loggedIn: false,
  });

  // This is passed down to login so that the login button works
  const changeUser = (u) => {
    setUser(u);
  };

  // Props passed to child objects
  const newProps = { user, changeUser };
  // Returns
  return (
    <div>
      <div>
        <Toolbar props={newProps} />
      </div>
      <Body>
        <Dashboard props={newProps} />
      </Body>
    </div>
  );
};

export default App;
