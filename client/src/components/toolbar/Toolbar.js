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

const Toolbar = ({ props }) => {
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
    fontsize: 25px;
    padding: 10px 20px;
    margin: auto;
    font-family: "Heebo", sans-serif;
  `;

  const [userIcon, setUserIcon] = useState("");
  const [title, setTitle] = useState(" ");

  // Set the title to the user's name and inventory
  const changeTitle = (t) => {
    setTitle(t);
  };

  // Set the icon to the user's portrait
  useEffect(() => {
    setUserIcon(props.user.userImg);
  }, [props.user]);

  // Props for child components
  const user = props.user;
  const changeUser = props.changeUser;
  const newProps = { user, changeUser, changeTitle };
  // Returns
  return (
    <Container>
      <Icon source={userIcon} />

      <div style={{ flex: 1 }}></div>
      <ButtonPanel props={newProps} />
    </Container>
  );
};

export default Toolbar;
