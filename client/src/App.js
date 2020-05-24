import React from "react";
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
 * <InventoryDisplay />
 */

const App = () => {
  // Styling
  const Body = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 10px 0px;
    justify-content: center;
  `;

  // TEST -> inserting a userkey
  const ukey = String(prompt("Enter a username: "));
  var devmode = String(prompt("Dev mode? Type Y or N: "));
  devmode = devmode.toLowerCase();

  // Returns
  return (
    <div>
      <div>
        <Toolbar ukey={ukey} devmode={devmode} />
      </div>
      <Body>
        <Dashboard ukey={ukey} devmode={devmode} />
      </Body>
    </div>
  );
};

export default App;
