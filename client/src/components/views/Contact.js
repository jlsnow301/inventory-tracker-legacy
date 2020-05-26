import React from "react";
import styled from "@emotion/styled";

const Contact = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    text-align: left;
    font-family: sans-serif;
  `;
  const TextBox = styled.div`
    font-family: Merriweather;
    font-size: 16pt;
    width: 55%;
    margin-top: 30px;
  `;

  const SubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  `;

  return (
    <Container>
      <TextBox>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur soccaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </TextBox>
      <SubmitForm>
        <h1>We'd love to hear from you!</h1>
        <div align="right" width="50%">
          <label>First Name: </label>
          <input size="30" type="text" id="fname" name="firstname" />
          <br />
          <label>Last Name: </label>
          <input size="30" type="text" id="lname" name="lastname" />
          <br />
          <label>Email: </label>
          <input size="30" type="text" id="email" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </SubmitForm>
    </Container>
  );
};

export default Contact;
