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
    margin-top: 12px;
    flex-wrap: wrap;
    justify-content: flex-end;
  `;
  const Greeting = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    color: darkgray;
    font-family: Merriweather;
  `;

  const UserInfo = styled.p`
    font-family: Merriweather;
    margin-left: 12px;
    color: white;
  `;

  // Logout button
  const logOut = (e) => {
    e.preventDefault();
    const user = {
      username: "Visitor",
      devmode: false,
      userImg: "./drugitol.png",
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
            <UserInfo>
              <u>{props.user.username}</u>
            </UserInfo>
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
