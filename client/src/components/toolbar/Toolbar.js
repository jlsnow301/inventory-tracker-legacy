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
    fontsize: 40px;
    padding: 10px 20px;
    margin: auto;
    font-family: "Times New Roman", Times, serif;
  `;

  const [userIcon, setUserIcon] = useState("");
  const [title, setTitle] = useState("Drugitol Pharmaceuticals");

  const changeTitle = (t) => {
    setTitle(t);
  };

  // HOW LONG WILL I GO BEFORE I USE THE THIS KEYWORD
  const user = props.user;
  const changeUser = props.changeUser;
  props = { user, changeUser, changeTitle };

  useEffect(() => {
    setUserIcon(user.userImg);
  }, [user]);

  // Returns
  return (
    <Container>
      <Icon source={userIcon} />
      <Slogan>{user.loggedIn ? `${title}` : <i>{title}</i>}</Slogan>
      <div style={{ flex: 1 }}></div>
      <ButtonPanel props={props} />
    </Container>
  );
};

export default Toolbar;
