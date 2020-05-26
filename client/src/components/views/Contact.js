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
  `;

  const SubmitForm = styled.div`
    margin: auto;
    margin-bottom: 5px;
    flex-wrap: wrap;
    justify-content: right;
  `;

  const InputBox = styled.div`
    width: 100%;
    clear: both;
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
        <br />
        <label>First Name</label>
        <InputBox>
          <input type="text" id="fname" name="firstname" />
        </InputBox>
        <br />
        <label>Last Name</label>
        <InputBox>
          <input type="text" id="fname" name="firstname" />
        </InputBox>
        <br />
        <label>Email</label>
        <InputBox>
          <input type="text" id="fname" name="firstname" />
        </InputBox>
        <br />
        <InputBox>
          <input type="submit" value="Submit" />
        </InputBox>
      </SubmitForm>
    </Container>
  );
};

export default Contact;
