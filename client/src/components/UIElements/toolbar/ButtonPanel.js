import React, { useContext } from "react";

import styled from "@emotion/styled";
import Button from "../FormElements/Button";
import { AuthContext } from "../../Functions/auth-context";

const ButtonPanel = (props) => {
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

  // Initial state
  const auth = useContext(AuthContext);

  // Returns
  return (
    <Container>
      {!auth.isLoggedIn ? (
        <Buttons>
          <Button to={"/login"}>LOGIN</Button>
          <Button to={"/about"}>ABOUT</Button>
          <Button to={"/contact"}>CONTACT</Button>
        </Buttons>
      ) : (
        <Buttons>
          <Button to={"/:userId/advanced"}>ADVANCED</Button>
          <Button to={"/:userId/overview"}>OVERVIEW</Button>
          <Button to={"/:userId/settings"}>SETTINGS</Button>
          <button onClick={auth.logout}>LOGOUT</button>
        </Buttons>
      )}
    </Container>
  );
};

export default ButtonPanel;
