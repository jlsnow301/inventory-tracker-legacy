// Module imports
import React, { useState, useEffect } from "react";
// Local imports
import InventoryCard from "../UIElements/InventoryCard";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { useAuth } from "../Hooks/auth-hook";
import { useAxiosClient } from "../Hooks/axios-hook";
// Styling
import "../../css/InventoryDisplay.css";

const InventoryDisplay = (props) => {
  // Initial states.
  const { token } = useAuth();
  const [inventory, setInventory] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useAxiosClient();

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(
        <InventoryCard
          label="Container"
          id={inventory[key].id}
          key={key}
          index={key}
          item={inventory[key]}
          switch={props.switch}
        />
      )
    );
    return cards;
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const responseData = await sendRequest(
          `GET`,
          `http://localhost:5000/api/${props.query}`,
          null,
          { Authorization: `Bearer ${token}` }
        );
        setInventory(responseData.inventories);
      } catch (err) {
        console.log(err);
      }
    };
    if (token) fetchInventory();
  }, [sendRequest, token, props]);

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
