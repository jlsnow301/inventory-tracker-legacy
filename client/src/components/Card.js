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
    justify-content: space-around;
    align-items: justify;
    border-radius: 15px;
  `;

  return (
    <Card classname="card">
      <ProductData product={item} />
      <ProductImage product={item} />
    </Card>
  );
};

export default Card;
