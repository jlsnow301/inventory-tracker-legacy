import React, { useState } from "react";
import styled from "@emotion/styled";
import Axios from "axios";
import Modal from "react-modal";
import { Grid } from "semantic-ui-react";

const Contact = () => {
  const [contactFirstName, setContactFirstName] = useState("");
  const [contactLastName, setContactLastName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMsg, setSuccessModalMsg] = useState("");

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
    margin-top: 0px;
    margin-left: 30px;

    font-family: sans-serif;
  `;

  const ContactIntro = styled.h1`
    color: #8d99ae;
    margin-right: 10px;
  `;

  const SubmitForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const ContactInfo = styled.div`
    width: 100%;
    margin-left: 30px;
  `;

  const Icon = styled.div`
    font-size: 30px;
  `;

  const List = styled.div`
    margin-top: 20px;
  `;

  const TextForm = styled.div`
    width: 50%;
  `;

  const Social = styled.div`
    margin-left: 14px;
  `;

  const IconSocial = styled.div`
    font-size: 35px;
  `;

  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <ContactIntro>Get in contact with us!</ContactIntro>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tincidunt augue interdum velit euismod.{" "}
          </p>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
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
                  <TextForm>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    ></textarea>
                    <input type="submit" value="Submit" />
                  </TextForm>
                </div>
              </form>
            </SubmitForm>
            <Modal
              isOpen={isSuccessModalOpen}
              onRequestClose={() => setIsSuccessModalOpen(false)}
            >
              <div>
                <button onClick={() => setIsSuccessModalOpen(false)}>
                  Close
                </button>
              </div>
              <p>{successModalMsg}</p>
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <ContactInfo>
              <List>
                <ul className="list-unstyled mb-4">
                  <li>
                    <Icon>
                      <ion-icon name="location-outline"></ion-icon>
                    </Icon>
                    Seattle, WA 98118, USA
                  </li>
                  <br />
                  <li>
                    <Icon>
                      <ion-icon name="call-outline"></ion-icon>
                    </Icon>
                    1-800-123-4567
                  </li>
                  <br />
                  <li>
                    <Icon>
                      <ion-icon name="mail-outline"></ion-icon>
                    </Icon>
                    contact@inventory.com
                  </li>
                </ul>
              </List>
            </ContactInfo>
          </Grid.Column>

          <Grid.Column>
            <Social>
              <h4>Connect:</h4>

              <IconSocial>
                <a href=" ">
                  <ion-Icon name="mail-outline"></ion-Icon>
                </a>
                <a href=" ">
                  <ion-Icon name="logo-twitter"></ion-Icon>
                </a>

                <a href=" ">
                  <ion-Icon name="logo-google"></ion-Icon>
                </a>
              </IconSocial>
            </Social>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Contact;
