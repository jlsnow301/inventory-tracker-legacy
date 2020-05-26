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
    fontsize: 40px;
    padding: 10px 20px;
    margin: auto;
    font-family: "Times New Roman", Times, serif;
  `;

  const [userIcon, setUserIcon] = useState("./this_is_fine.png");
  const [title, setTitle] = useState("Inventory Manager v1");

  useEffect(() => {
    const userInput = String(prompt("What do you want the title to be?"));
    setTitle(userInput);
    console.log(userImg);
    setUserIcon(userImg);
  }, [userImg]);

  // Returns
  return (
    <Container>
      <Icon source={userIcon} />
      <Slogan>{title}</Slogan>
      <div style={{ flex: 1 }}></div>
      <ButtonPanel loggedIn={loggedIn} devmode={devmode} />
    </Container>
  );
};

export default Toolbar;
