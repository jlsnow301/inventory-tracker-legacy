import React from "react";
import styled from "@emotion/styled";
import Layout from "./components/Layout";
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

  // Validation if there is a user with the user's name
  // For now, unless devmode is enabled, you need one of our names
  var users = ["anthony", "selina", "margarita", "jerm"];

  // TEST -> inserting a userkey
  const username = String(prompt("Enter a username: ")).toLowerCase();
  const loggedIn = users.indexOf(username) >= 0;
  var devmode = String(prompt("Dev mode? Type Y or N: ")).toLowerCase();
  devmode = devmode === "y";
  const userImg = "./this_is_fine.png";

  // Returns
  return (
    <div>
      <div>
        <Toolbar userImg={userImg} loggedIn={loggedIn} devmode={devmode} />
      </div>
      <Body>
        <Dashboard username={username} loggedIn={loggedIn} devmode={devmode} />
      </Body>
    </div>
  );
};

export default App;
