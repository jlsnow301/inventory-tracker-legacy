import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./login/Login";
import About from "./views/About";
import Contact from "./views/Contact";

const PopupButton = ({ button }) => {
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

    default:
      break;
  }

  // Ensures modal can close and open properly
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Returns
  return (
    <div className="popupButton">
      <button onClick={() => setModalIsOpen(true)}>{title}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {component}
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupButton;
