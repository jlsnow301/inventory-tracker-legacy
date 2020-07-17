// Module imports
import React, { useState } from "react";
// Local imports
import InventoryDisplay from "./InventoryDisplay";
import Button from "../UIElements/FormElements/Button";
import { useAuth } from "../Hooks/auth-hook";
// Styling
import "../../css/Dashboard.css";

const Dashboard = (props) => {
  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();
  const { userId } = useAuth();

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };
  // <Button to={`/items/${inventoryId}/add`}>Add Item</Button> Disabled for now
  // Returns
  return (
    <div className="dash-container">
      <div className="dash-header">
        <h2>
          <b>Inventory View</b>
        </h2>
        <div style={{ flex: 1 }}></div>
        <div className="dash-tools">
          <Button to={`/inventories/${userId}/add`}>Add Inventory</Button>
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
