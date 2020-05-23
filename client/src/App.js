import React from "react";
import styled from "@emotion/styled";
import Toolbar from "./components/toolbar/Toolbar";
import InventoryDisplay from "./components/dashboard/InventoryDisplay";

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
    margin: 0 auto;
    padding: 10px 0px;
    display: flex;
    justify-content: center;
  `;

  // Returns
  return (
    <div>
      <div className="header">
        <Toolbar />
      </div>
      <Body>
        <InventoryDisplay />
      </Body>
    </div>
  );
};

export default App;
