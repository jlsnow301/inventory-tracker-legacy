import React from "react";
import styled from "@emotion/styled";

const Contact = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;

    font-family: sans-serif;
  `;
  const TextBox = styled.div`
    font-family: Merriweather;
    font-size: 30pt;
    margin-right: 30px
    width: 20%;
    align: center
    margin-top: 40px;
  `;

  const SubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-right: 90px;
  `;

  const ImgTwo = styled.div`
    width: 55%;
    height: 40%;
    margin-left: 60px;
    margin-right: 0;
  `;

  return (
    <Container>
      <TextBox>
        <ImgTwo>
          <img src="./question.jpg" width=" 100% " alt="Pharmaceuticals" />
        </ImgTwo>
      </TextBox>

      <SubmitForm>
        <h1>GET IN TOUCH </h1>
        <div align="right" width="50%">
          <label>First Name: </label>
          <input size="40" type="text" id="fname" name="firstname" />
          <br />
          <label>Last Name: </label>
          <input size="40" type="text" id="lname" name="lastname" />
          <br />
          <label>Email: </label>
          <input size="40" type="text" id="email" name="email" />
          <br />
          <br />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <input type="submit" value="Submit" />
        </div>
      </SubmitForm>
    </Container>
  );
};

export default Contact;
