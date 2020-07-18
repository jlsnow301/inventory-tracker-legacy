// Module imports
import React, { useState, useEffect } from "react";
// Local imports
import InventoryCard from "../UIElements/InventoryCard";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import Axios from "axios";
import { useHttpClient } from "../Hooks/http-hook";
import { useAuth } from "../Hooks/auth-hook";
// Styling
import "../../css/InventoryDisplay.css";

const InventoryDisplay = (props) => {
  // Initial states.
  const [inventory, setInventory] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { token, userId } = useAuth();

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(
        <InventoryCard
          label="Container"
          key={key}
          index={key}
          item={inventory[key]}
        />
      )
    );
    return cards;
  };

  // Initially sets the user inventories on display
  useEffect(() => {
    if (token) {
      Axios.get(`http://localhost:5000/api/inventories/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setInventory(res.data.inventories);
        })
        .catch((err) => console.log(err));
    }
  }, [sendRequest, userId, token]);

  // Returns
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="container">
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && inventory && <GetInventory />}
      </div>
    </React.Fragment>
  );
};

export default InventoryDisplay;
