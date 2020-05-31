import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import GetHttp from "./AxiosHttp";

const InventoryDisplay = ({ query, props }) => {
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

  // Get the inventory
  const getInventory = (q) => {
    setInventory(GetHttp("inventory", q));
  };

  // Creates a card for each item (key) in the db.
  const DisplayInventory = () => {
    var keys = [];
    Object.keys(inventory).forEach((key) =>
      keys.push(<Card item={inventory[key]} />)
    );
    return keys;
  };

  // Initial render
  useEffect(() => {
    query.length === "" ? getInventory(null) : getInventory(`/${query}`);
  }, [query]);

  // Returns
  return (
    <Container>
      <DisplayInventory />
    </Container>
  );
};

export default InventoryDisplay;
