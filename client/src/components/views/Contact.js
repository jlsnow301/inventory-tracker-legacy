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
    margin-top: 20px;
  `;

  const SubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 20%;
  `;

  const ImgTwo = styled.div`
    width: 55%;
    height: 20%;
    margin-left: 30%;
    margin-right: 0;
  `;

  const ContactInfo = styled.div`
    width: 50%;
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

        <ContactInfo>
          <ul class="list-unstyled mb-4">
            <li>
              <p>Seattle, WA 98118, USA</p>
            </li>

            <li>
              <p>1-800-123-4567</p>
            </li>

            <li>
              <p>contact@inventory.com</p>
            </li>
          </ul>
        </ContactInfo>
      </SubmitForm>
    </Container>
  );
};

export default Contact;
