import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Icon from "./Icon";
import ButtonPanel from "./ButtonPanel";

/* Use these Comments to communicate Todos or other info
 * @Reminder - Readme.md has resources, use it
 * @Todo
 *
 *
 */

const Toolbar = ({ userImg, loggedIn, devmode }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: #bd0028;
    padding: 6px 8px;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
  `;
  const Slogan = styled.h1`
    color: #ffffff;
    fontsize: 30px;
    padding: 10px 20px;
    margin: auto;

    font-family: Roboto, "Times New Roman", Times, serif;
  `;

  // Returns
  return (
    <Container>
      <Slogan>Inventory Manager v1</Slogan>
      <div style={{ flex: 1 }}></div>
      <ButtonPanel loggedIn={loggedIn} devmode={devmode} />
    </Container>
  );
};

export default Toolbar;
