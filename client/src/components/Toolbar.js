import React, { useState } from "react";
import styled from "@emotion/styled";

import Icon from "./Icon";
import ButtonPanel from "./ButtonPanel";

/* Use these Comments to communicate Todos or other info
 * @Reminder - Readme.md has resources, use it
 * @Todo
 *
 *
 */
const Toolbar = () => {
  // Styles
  const Container = styled.div`
    display: flex;
    background: rgb(245, 50, 50);
    padding: 6px 8px;
    width: 100%;
    height: 100px;
  `;
  const Slogan = styled.h1`
    color: white;
    fontsize: 40px;
    padding: 10px 20px;
    margin: auto;
    fontfamily: Fira Sans;
  `;

  const ukey = null;

  // Returns the toolbar
  return (
    <Container>
      <Icon source="./this_is_fine.png" />
      <Slogan>Slogan</Slogan>
      <div style={{ flex: 1 }}></div>
      <ButtonPanel ukey={ukey} />
    </Container>
  );
};

export default Toolbar;
