import React from "react";
import styled from "@emotion/styled";

const ProductImage = (props) => {
  const Icon = styled.img`
    width: 25%;
  `;
  var icon = props.image;

  return <Icon className="icon" src={icon} alt="Product Icon" />;
};

export default ProductImage;
