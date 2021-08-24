import React from "react";
import ReactDOM from "react-dom";

import "../css/backdrop.css";

interface Props {
  onClick: () => void;
}

const Backdrop: React.FC<Props> = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
