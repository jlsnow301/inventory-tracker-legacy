import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import GetHttp from "./AxiosHttp";

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
  // const [cards, setCards] = useState([]); Might need state for this later if we're deleting items
  const updateLabels = props.updateLabels;

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(<Card key={key} index={key} item={inventory[key]} />)
    );
    return cards;
  };

  useEffect(() => {
    setInventory(GetHttp("inventory", props.query));
  }, [props.query]);

  // Returns
  return (
    <Container>
      <GetInventory />
    </Container>
  );
};

export default InventoryDisplay;
