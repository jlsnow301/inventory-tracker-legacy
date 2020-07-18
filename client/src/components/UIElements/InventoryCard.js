// Module imports
import React from "react";
// Styling
import "../../css/InventoryCard.css";

const InventoryCard = ({ label, index, item }) => {
  index = parseInt(index) + 1;
  // For now, we are simply adding mongodb defaults to hidden keys
  var hiddenKeys = [];
  hiddenKeys += ["id", "_id", "__v"];

  const DisplayDetails = () => {
    var entries = [];
    for (let [key, value] of Object.entries(item)) {
      if (hiddenKeys.indexOf(key) >= 0) {
        continue;
      }
      entries.push(
        <li key={key}>
          <b>{key}: </b>
          {value}
        </li>
      );
    }
    return entries;
  };

  // Returns
  return (
    <div className="card-container">
      <div className="card-header">
        <u>
          <b>{label} #</b>
          {index}
        </u>
        <div style={{ flex: 1 }} />
        <img
          align="right"
          width="30%"
          height="40%"
          src="./bottle.png"
          alt="Product Icon"
        />
      </div>
      <div className="card-details">
        <ol>
          <DisplayDetails />
        </ol>
      </div>
    </div>
  );
};

export default InventoryCard;
