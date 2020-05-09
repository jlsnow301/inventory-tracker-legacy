import React from "react";
import styled from "@emotion/styled";

const Icon = ({ source }) => {
  const Icon = styled.img`
    width: 5%;
  `;

  return <Icon className="icon" src={source.toString()} alt="Icon" />;
};

export default Icon;
