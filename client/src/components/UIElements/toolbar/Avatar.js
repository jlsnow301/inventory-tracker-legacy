import React from "react";
import styled from "@emotion/styled";

const Avatar = ({ source }) => {
  // Styling
  const Icon = styled.img`
    width: 29rem;
    height: 6.5rem;
  `;

  // Returns
  return <Icon className="icon" src={source} alt="Icon" />;
};

export default Avatar;
