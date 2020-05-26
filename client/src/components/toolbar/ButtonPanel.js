import React from "react";
import styled from "@emotion/styled";
import PopupButton from "./PopupButton";

const ButtonPanel = ({ props }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Buttons = styled.div`
    display: flex;
    margin: 15px 15px;
    flex-wrap: wrap;
  `;
  const Greeting = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  `;
  const WelcomeText = styled.text`
    font-family: Merriweather;
    color: lightgray;
    margin-left: 20px;
  `;

  const UserInfo = styled.text`
    font-family: Merriweather;
    margin-left: 12px;
    color: white;
  `;

  // TODO: Get a button to login or log out
  // Requires: useState
  // Change the above var to login, setLogin or similar

  // Returns

  const logOut = () => {
    const user = {
      username: "Visitor",
      devmode: false,
      userImg: "./this_is_fine.png",
      loggedIn: false,
    };

    //props.changeUser(user);
  };

  return (
    <div>
      {!props.user.loggedIn && !props.user.devmode ? (
        <Buttons>
          <PopupButton button="about" />
          <PopupButton button="contact" />
          <PopupButton button="login" props={props} />
        </Buttons>
      ) : (
        <Container>
          <Greeting>
            <WelcomeText>You are logged in as: </WelcomeText>
            <UserInfo>
              <u>{props.user.username}</u>
            </UserInfo>
          </Greeting>
          <Buttons>
            <PopupButton button="advsearch" />
            <PopupButton button="overview" />
            <PopupButton button="settings" />
            <button onClick={logOut()}>Logout</button>
          </Buttons>
        </Container>
      )}
    </div>
  );
};

export default ButtonPanel;
