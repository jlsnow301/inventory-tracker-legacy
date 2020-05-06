import React from "react";
import "./App.css";
import styled from "@emotion/styled";

import Toolbar from "./components/Toolbar";
import InventoryDisplay from "./components/InventoryDisplay";

const Body = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

function App() {
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
}

export default App;
