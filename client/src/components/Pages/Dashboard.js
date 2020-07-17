// Module imports
import React, { useState } from "react";
// Local imports
import InventoryDisplay from "./InventoryDisplay";
import Button from "../UIElements/FormElements/Button";
// Styling
import "../../css/Dashboard.css";

const Dashboard = (props) => {
  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  // Returns
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h1>
          <b>Item View</b>
        </h1>
        <div style={{ flex: 1 }}></div>
        <div className="dash-tools">
          <Button to={"/:userId/addItem"}>Add Item</Button>
          <Button to={"/:userId/addInventory"}>Add Inventory</Button>
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              ref={inputText}
              placeholder="Enter keywords..."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="dash-body">
        <InventoryDisplay query={query} />
      </div>
    </div>
  );
};

export default Dashboard;
