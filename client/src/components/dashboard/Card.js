import React from "react";
import styled from "@emotion/styled";

import ProductData from "./ProductData";
import ProductImage from "./ProductImage";

const Card = (item) => {
  // Styling
  const Card = styled.div`
    margin: 20px;
    background: rgb(255, 255, 255);
    width: 22.5%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
    padding: 15px 10px;
    overflow: auto;
  `;

  // Returns
  return (
    <Card classname="card">
      <ProductData product={item} />
      <ProductImage product={item} />
    </Card>
  );
};

export default Card;
