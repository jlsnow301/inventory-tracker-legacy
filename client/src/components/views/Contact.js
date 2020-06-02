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
    margin-top: 10px;
    margin-right: 20%;
  `;

  const ImgTwo = styled.div`
    width: 55%;
    height: 25%;
    margin-left: 30%;
    margin-right: 0;
    filter: grayscale(35%);
  `;

  const ContactInfo = styled.div`
    width: 100%;
  `;

  const Icon = styled.div`
    font-size: 30px;
  `;

  const List = styled.div`
    margin-top: 20px;
  `;
  return (
    <Container>
      <TextBox>
        <ImgTwo>
          <img src="./question.jpg" width=" 100% " alt="Pharmaceuticals" />
        </ImgTwo>
      </TextBox>

      <SubmitForm>
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
          <List>
            <ul class="list-unstyled mb-4">
              <li>
                <p>
                  <Icon>
                    <ion-icon name="location-outline"></ion-icon>
                  </Icon>
                  Seattle, WA 98118, USA
                </p>
              </li>

              <li>
                <Icon>
                  <ion-icon name="call-outline"></ion-icon>
                </Icon>
                <p>1-800-123-4567</p>
              </li>

              <li>
                <Icon>
                  <ion-icon name="mail-outline"></ion-icon>
                </Icon>
                <p>contact@inventory.com</p>
              </li>
            </ul>
          </List>
        </ContactInfo>
      </SubmitForm>
    </Container>
  );
};

export default Contact;
