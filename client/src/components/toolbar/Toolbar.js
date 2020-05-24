import React from "react";
import styled from "@emotion/styled";
import Icon from "./Icon";
import ButtonPanel from "./ButtonPanel";

/* Use these Comments to communicate Todos or other info
 * @Reminder - Readme.md has resources, use it
 * @Todo
 *
 *
 */

const Toolbar = ({ ukey, devmode }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    background: rgb(245, 50, 50);
    padding: 6px 8px;
    width: 100%;
    height: 100px;
    justify-content: flex-start;
  `;
  const Slogan = styled.h1`
    color: white;
    fontsize: 40px;
    padding: 10px 20px;
    margin: auto;
    font-family: "Times New Roman", Times, serif;
  `;

  // Returns
  return (
    <Container>
      <Icon source="./this_is_fine.png" />
      <Slogan>Inventory Manager v1</Slogan>
      <div style={{ flex: 1 }}></div>
      <ButtonPanel ukey={ukey} devmode={devmode} />
    </Container>
  );
};

export default Toolbar;
