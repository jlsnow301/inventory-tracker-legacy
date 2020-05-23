import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

import MockData from "./MockData";

const InventoryDisplay = (ukey) => {
  // Styling
  const Container = styled.div`
    display: flex;
    align-self: stretch;
    flex-wrap: wrap;
    width: 90%;
    height: 850px;
    background: rgb(235, 235, 235);
    border: 2px solid rgb(120, 120, 120);
    padding: 10px;
    overflow: auto;
  `;

  var data = MockData();
  // TODO: Link the db up here instead of falsely generating it with a local file
  // axios.get(`http://127.0.0.1:5000/api/inventory`, {ukey})
  //    .then(res => {
  //    console.log(res);
  //    var data = res.data;
  //  })

  const DisplayInventory = () => {
    var keys = [];
    Object.keys(data).forEach((key) => keys.push(<Card item={data[key]} />));
    return keys;
  };

  // Returns
  return (
    <Container>
      <DisplayInventory />
    </Container>
  );
};

export default InventoryDisplay;
