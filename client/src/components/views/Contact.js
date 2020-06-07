import React, { useState } from "react";
import styled from "@emotion/styled";
import Axios from "axios";
import Modal from "react-modal";

const Contact = () => {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  /******/
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMsg, setSuccessModalMsg] = useState("");

  // Changes the query, which is passed to inventory display.
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/contact", {
      firstname: contactFirstName,
      lastname: contactLastName,
      email: contactEmail,
      message: contactMessage,
    }).then((res) => {
      if (res.data.status === "1") {
        setSuccessModalMsg(res.data.message);
        setIsSuccessModalOpen(true);
      }
    });

    setContactFirstName("");
    setContactLastName("");
    setContactEmail("");
    setContactMessage("");
  };

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
    width: 20%;
    align: center;
    margin-bottom: 50px;
  `;

  const SubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const ImgTwo = styled.div`
    filter: grayscale(35%);
    width: 27rem;
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div align="right" width="50%">
            <label>First Name: </label>
            <input
              size="40"
              type="text"
              id="fname"
              value={contactFirstName}
              onChange={(e) => setContactFirstName(e.target.value)}
            />
            <br />
            <label>Last Name: </label>
            <input
              size="40"
              type="text"
              id="lname"
              value={contactLastName}
              onChange={(e) => setContactLastName(e.target.value)}
            />
            <br />
            <label>Email: </label>
            <input
              size="40"
              type="text"
              id="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <br />
            <br />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            ></textarea>
            <input type="submit" value="Submit" />
          </div>
        </form>
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
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={() => setIsSuccessModalOpen(false)}
      >
        <div>
          <button onClick={() => setIsSuccessModalOpen(false)}>Close</button>
        </div>
        <p>{successModalMsg}</p>
      </Modal>
    </Container>
  );
};

export default Contact;
