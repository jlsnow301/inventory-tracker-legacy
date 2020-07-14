import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import InventoryCard from "../UIElements/InventoryCard";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { useHttpClient } from "../Hooks/http-hook";

const InventoryDisplay = (props) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: rgb(235, 235, 235);
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid rgb(120, 120, 120);
    justify-content: space-around;
    height: 775px;
    overflow: auto;
  `;

  // Initial states.
  const [inventory, setInventory] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

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
          `http://localhost:5000/api/inventory/user/${userId}`
        );
        setInventory(responseData.inventories);
      } catch (err) {}
    };
    fetchInventories();
  }, [sendRequest, userId]);

  // Sets the inventories based on search (currently by ID only)
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/inventory/${props.query}`
        );
        setInventory(responseData);
      } catch (err) {}
    };
    fetchQuery();
  }, [sendRequest, props.query]);

  // Returns
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Container>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && inventory && <GetInventory />}
      </Container>
    </React.Fragment>
  );
};

export default InventoryDisplay;
