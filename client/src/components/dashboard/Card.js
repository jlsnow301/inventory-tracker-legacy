import React from "react";
import styled from "@emotion/styled";

const Card = (data) => {
  // Styling
  const Container = styled.div`
    display: flex;
    margin: 20px;
    background: rgb(255, 255, 255);
    width: 22.5%;
    height: 300px;
    justify-content: space-between;
    border: 2px solid dimgray;
    border-radius: 8px;
    padding: 15px 20px;
    overflow: auto;
  `;
  const Icon = styled.img`
    max-width: 45%;
    max-height: 40%;
  `;

  // For now, we are simply adding "id" to hidden keys
  var hiddenKeys = [];
  hiddenKeys += ["id", "_id", "__v"];

  const DisplayDetails = () => {
    var entries = [];
    for (let [key, value] of Object.entries(data.item)) {
      if (hiddenKeys.indexOf(key) >= 0) {
        continue;
      }
      entries.push(<b>{key}: </b>, `${value}`, <br />);
    }
    return entries;
  };

  // Returns
  return (
    <Container>
      <p>
        <DisplayDetails />
      </p>
      <Icon className="icon" src="./bottle.png" alt="Product Icon" />
    </Container>
  );
};

export default Card;
