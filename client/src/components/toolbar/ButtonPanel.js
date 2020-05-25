import React from "react";
import styled from "@emotion/styled";
import PopupButton from "./PopupButton";

const ButtonPanel = ({ loggedIn, devmode }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    padding: 10px 0px;
    justify-content: flex-start;
  `;

  // TODO: Get a button to login or log out
  // Requires: useState
  // Change the above var to login, setLogin or similar

  // Returns
  return (
    <div>
      {!loggedIn && !devmode ? (
        <Container>
          <PopupButton button="about" />
          <PopupButton button="contact" />
          <PopupButton button="login" />
        </Container>
      ) : (
        <Container>
          <PopupButton button="advsearch" />
          <PopupButton button="overview" />
          <PopupButton button="settings" />
        </Container>
      )}
    </div>
  );
};

export default ButtonPanel;
