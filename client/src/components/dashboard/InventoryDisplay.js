import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import axios from "axios";
import MockData from "./MockData"; // USE THIS FOR TESTING

const InventoryDisplay = ({ query, devmode }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: rgb(235, 235, 235);
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px solid rgb(120, 120, 120);
    justify-content: space-around;
    height: 773px;
    overflow: auto;
  `;

  // Initial states.
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Test the card functionality
  const testData = MockData();
  const TestInventory = () => {
    var keys = [];
    Object.keys(testData).forEach((key) =>
      keys.push(<Card item={testData[key]} />)
    );
    return keys;
  };

  // Get inventory from server.
  const getInventory = async (q) => {
    setLoading(true);
    try {
      axios.get(`http://127.0.0.1:5000/api/inventory${q}`).then((res) => {
        console.log(res);
        setInventory(res.data);
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Creates a card for each item (key) in the db.
  const DisplayInventory = () => {
    if (devmode === "y") return TestInventory();
    var keys = [];
    Object.keys(inventory).forEach((key) =>
      keys.push(<Card item={inventory[key]} />)
    );
    return keys;
  };

  // Initial render
  useEffect(() => {
    console.log(`Searching for: ${query}`);
    // It would probably be nice that we did some sanitization before we just jam this in the server
    query.length === "" ? getInventory("") : getInventory(`/${query}`);
  }, [query]);

  // Returns
  return (
    <Container>
      {!loading && !error ? (
        <DisplayInventory />
      ) : loading ? (
        <h1>Loading...</h1>
      ) : !loading && error ? (
        <h1>Error!</h1>
      ) : null}
    </Container>
  );
};

export default InventoryDisplay;
