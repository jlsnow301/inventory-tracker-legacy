import React from "react";
import styled from "@emotion/styled";

const Icon = ({ source }) => {
  console.log(source);
  // Styling
  const Icon = styled.img`
    width: 5%;
  `;

  // Returns
  return <Icon className="icon" src={source} alt="Icon" />;
};

export default Icon;
