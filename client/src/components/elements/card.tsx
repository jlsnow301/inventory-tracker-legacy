import React from "react";
import { CSSProperties } from "react";

import "../css/card.css";

interface Props {
  className: string;
  style?: CSSProperties;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
