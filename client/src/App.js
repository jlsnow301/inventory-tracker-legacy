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

  // I tried to isolate these two (rather than making a function inside the user object) because
  // Redefining any variables using setUser would mean redefining the function as well
  // It's probably possible, but it didn't end well in testing
  // I could, maybe, make changeUser a little more descriptive of what it's trying to change
  // So that it doesn't seek to overwrite itsself
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
