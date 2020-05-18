import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "./Card";

const InventoryDisplay = ({ ukey }) => {
  const Container = styled.div`
    display: flex;
    align-self: stretch;
    flex-wrap: wrap;
    width: 85%;
    height: 820px;
    background: rgb(235, 235, 235);
    border: 20px white;
    padding: 10px;
    overflow: auto;
  `;

  const [inventoryItems, setInventory] = useState([
    { id: "cg1", text: "Item one" },
    { id: "cg2", text: "Item two" },
    { id: "cg3", text: "Item three" },
  ]);

  const addNewItemHandler = (newItem) => {
    setInventory((prevInventory) => prevInventory.concat(newItem));
  };

  return (
    <Container className="flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default InventoryDisplay;
