import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import RouteManager from "../RouteManager";
import Card from "./Card";

const InventoryDisplay = (ukey) => {
  // Styling
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
  // Commenting this out just to briefly make a test db.
  const data = {
    "1": {
      Name: "Tylenol",
      Class: "Painkiller",
      Price: "5",
    },
    "2": {
      Name: "Advil",
      Class: "Painkiller",
      Price: "5",
    },
    "3": {
      Name: "Aleve",
      Class: "Painkiller",
      Price: "5",
    },
  };

  const DisplayInventory = () => {
    var items = [];
    for (let [key, value] of Object.entries(data)) {
      items.push(<Card product={key} />);
    }
    return items;
  };

  // Returns
  return (
    <Container>
      <DisplayInventory />
    </Container>
  );
};

export default InventoryDisplay;
