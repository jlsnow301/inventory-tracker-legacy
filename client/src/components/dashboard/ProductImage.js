import React from "react";
import styled from "@emotion/styled";

const ProductImage = (props) => {
  // Styling
  const Icon = styled.img`
    width: 25%;
  `;
  var icon = props.image;

  // Returns
  return <Icon className="icon" src={icon} alt="Product Icon" />;
};

export default ProductImage;
