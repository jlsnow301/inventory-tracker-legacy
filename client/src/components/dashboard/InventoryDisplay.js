import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "./Card";

const InventoryDisplay = (ukey) => {
  const Container = styled.div`
    display: flex;
    align-self: stretch;
    flex-wrap: wrap;
    width: 85%;
    height: 800px;
    background: rgb(235, 235, 235);
    padding: 10px;
    overflow: auto;
  `;

  // Set inventory to null at first
  const [inventoryItems, setInventory] = useState([]);

  // Pull the inventory based on user
  const data = async (ukey) => {
    const apiRes = await fetch(
      `http://127.0.0.1:8080/api/inventory&ukey=${ukey}`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  // This sets the inventory initially
  useEffect(() => {
    data(ukey).then((res) => {
      setInventory(res);
    });
  }, [inventoryItems]);

  // This iterates through the inventory and posts as cards
  const displayInventory = (inventoryItems) => {
    if (!inventoryItems.length) return null;

    return inventoryItems.map((item, index) => <Card item={item.itemID} />);
  };

  return (
    <Container>{this.displayInventory(this.state.inventoryItems)}</Container>
  );
};

export default InventoryDisplay;
