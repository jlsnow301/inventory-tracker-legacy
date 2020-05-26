import React, { useState } from "react";
import Modal from "react-modal";
import Login from "../login/Login";
import About from "../views/About";
import Contact from "../views/Contact";
import styled from "@emotion/styled";

const PopupButton = ({ button }) => {
  const Container = styled.div`
    margin-right: 10px;
  `;

  let title = "";
  let component = "";
  switch (button) {
    case "login":
      title = "Login";
      component = <Login />;
      break;
    case "about":
      title = "About";
      component = <About />;
      break;
    case "contact":
      title = "Contact";
      component = <Contact />;
      break;
    case "advsearch":
      title = "Adv Search";
      break;
    case "overview":
      title = "Overview";
      break;
    case "settings":
      title = "Settings";
      break;
    case "addItem":
      title = "Add Item";
      // component = <AddItem />;
      break;

    default:
      break;
  }

  // Ensures modal can close and open properly
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Returns
  return (
    <Container>
      <button onClick={() => setModalIsOpen(true)}>{title}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {component}
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </Container>
  );
};

export default PopupButton;
