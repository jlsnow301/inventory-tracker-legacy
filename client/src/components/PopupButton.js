import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import Login from "./login/Login";

const PopupButton = ({ button }) => {
  let title = "";
  let body = "";
  let component = "";
  switch (button) {
    case "login":
      title = `Login`;
      body = `Enter your login details.`;
      component = <Login />;
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
    <div className='popupButton'>
      <Button onClick={() => setModalIsOpen(true)}>{title}</Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>This is where we would put a component</div>
        {component}
        <div>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupButton;
