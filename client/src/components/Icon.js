import React from "react";
import styled from "@emotion/styled";

const Icon = ({ source }) => {
  // Styling
  const Icon = styled.img`
    width: 5%;
  `;

  // Returns
  return <Icon className="icon" src={source.toString()} alt="Icon" />;
};

export default Icon;
