import React from "react";
import { CSSProperties } from "react";

import "../../css/Card.css";

interface Props {
  className: string;
  style: CSSProperties;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};
