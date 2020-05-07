import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import ProductData from "./ProductData";
import ProductImage from "./ProductImage";

const Card = ({ item }) => {
  const Card = styled.div`
    margin: 20px;
    background: rgb(255, 255, 255);
    width: 22.5%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 15px;
    padding: 15px 10px;
  `;

  return (
    <Card classname="card">
      <ProductData product={item} />
      <div style={{ flex: 1 }}></div>
      <ProductImage product={item} />
    </Card>
  );
};

export default Card;
