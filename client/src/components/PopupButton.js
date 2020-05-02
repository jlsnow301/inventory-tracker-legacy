import React, { useState } from "react";
import Modal from "react-modal";

const PopupButton = ({ button }) => {
  let title = "";
  let body = "";
  switch (button) {
    case "login":
      title = `Login`;
      body = `Enter your login details.`;
      break;
    case "about":
      title = `About`;
      body = `Created from the collaborative work of Anthony, Margarita, Selina, Jeremiah!`;
      break;
    case "contact":
      title = `Contact`;
      body =
        "You can find us via North Seattle College! Our emails:<br />Anthony: stenbergdigeronimo@gmail.com<br /> " +
        "Margarita: pearlmargaret2012@gmail.com<br />Selina: selinapn@outlook.com<br />Jeremiah: jlsnow.301@gmail.com ";
      break;
    case "advsearch":
      title = `Advanced Search`;
      body = `Type in the specific query details here.`;
      break;
    case "overview":
      title = `Overview`;
      body = `Here is today's inventory forecast!`;
      break;
    case "settings":
      title = `Settings`;
      body = `User-specific profile settings`;
      break;

    default:
      break;
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="popupButton">
      <button onClick={() => setModalIsOpen(true)}>{title}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupButton;
