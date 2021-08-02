import React from "react";
import { Link } from "react-router-dom";

import "../../../css/Button.css";

interface Props {
  href?: string;
  to?: string;
  inverse?: boolean;
  danger?: boolean;
  size?: string;
  children?: {};
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.href}>
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        // Note that exact was here, and typescript doesn't like it.
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
