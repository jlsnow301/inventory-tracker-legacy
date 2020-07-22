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
  const { token, userId } = useAuth();
  const [itemView, setItemView] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [invId, setInvId] = useState("");
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
          examine={switchModeHandler}
        />
      )
    );
    return cards;
  };

  let query;
  if (!itemView) {
    query =
      props.query === ""
        ? `inventories/user/${userId}`
        : `inventories/${props.query}`;
  } else {
    query =
      props.query === "" ? `items/inventory/${invId}` : `items/${props.query}`;
  }

  const switchModeHandler = (invId) => {
    setInvId(invId);
    if (itemView) setItemView(false);
    else setItemView(true);
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const responseData = await sendRequest(
          `GET`,
          `http://localhost:5000/api/${query}`,
          null,
          { Authorization: `Bearer ${token}` }
        );
        setInventory(responseData.inventories);
      } catch (err) {
        console.log(err);
      }
    };
    if (userId) fetchInventory();
  }, [sendRequest, userId, token, query]);

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
