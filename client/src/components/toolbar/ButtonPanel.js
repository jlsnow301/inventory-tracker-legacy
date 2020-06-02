import React from "react";
import styled from "@emotion/styled";
import PopupButton from "./PopupButton";
import Login from "../login/Login";

const ButtonPanel = ({ props }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Buttons = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 0px 30px;
    border-radius: 5px
    flex-wrap: wrap;
    
    justify-content: flex-end;
  `;
  const Greeting = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    color: #00000;
    font-size: 35px
    font-family: "Roboto", serif;
  `;

  const UserInfo = styled.p`
    font-family: "Roboto", serif;
    margin-left: 12px;
    color: #2b2d42;
  `;

  // Logout button
  const logOut = (e) => {
    e.preventDefault();
    const user = {
      username: "Visitor",
      devmode: false,
      userImg: "./logo1.png",
      loggedIn: false,
    };
    props.changeTitle("Drugitol Pharmaceuticals");
    props.changeUser(user);
  };

  // Returns
  return (
    <div>
      {!props.user.loggedIn && !props.user.devmode ? (
        <Container>
          <Login props={props} />
          <Buttons>
            <PopupButton button="about" />
            <PopupButton button="contact" />
          </Buttons>
        </Container>
      ) : (
        <Container>
          <Greeting>
            You are logged in as:
            <UserInfo>{props.user.username}</UserInfo>
          </Greeting>
          <Buttons>
            <PopupButton button="advsearch" />
            <PopupButton button="overview" />
            <PopupButton button="settings" />
            <button onClick={(e) => logOut(e)}>Logout</button>
          </Buttons>
        </Container>
      )}
    </div>
  );
};

export default ButtonPanel;
