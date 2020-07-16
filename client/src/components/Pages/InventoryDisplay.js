// Module imports
import React, { useState, useEffect } from "react";
// Local imports
import InventoryCard from "../UIElements/InventoryCard";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { useHttpClient } from "../Hooks/http-hook";
import { useAuth } from "../Hooks/auth-hook";
// Styling
import "../../css/InventoryDisplay.css";

const InventoryDisplay = (props) => {
  // Initial states.
  const [inventory, setInventory] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId } = useAuth();

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(<InventoryCard key={key} index={key} item={inventory[key]} />)
    );
    return cards;
  };

  // Initially sets the user inventories on display
  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/inventories/user/${userId}`
        );
        setInventory(responseData.inventories);
      } catch (err) {}
    };
    if (userId) {
      fetchInventories();
    }
  }, [sendRequest, userId]);

  // // Sets the inventories based on search (currently by ID only)
  // useEffect(() => {
  //   const fetchQuery = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `http://localhost:5000/api/inventory/${props.query}`
  //       );
  //       setInventory(responseData);
  //     } catch (err) {}
  //   };
  //   fetchQuery();
  // }, [sendRequest, props.query]);

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
