import React from "react";
import styled from "@emotion/styled";

const Card = (item) => {
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

  const DisplayDetails = () => {
    var details = [];
    for (let [key, value] of Object.entries(item.product)) {
      if (key == "id") {
        continue;
      }
      details.push(<b>{key}: </b>, `${value}`, <br />);
    }
    return details;
  };

  // Returns
  return (
    <Container classname="card">
      <p>
        <DisplayDetails />
      </p>
      <Icon className="icon" src="./bottle.png" alt="Product Icon" />
    </Container>
  );
};

export default Card;
