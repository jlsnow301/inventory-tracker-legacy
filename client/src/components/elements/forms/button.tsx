import React from "react";
import { Link } from "react-router-dom";

import "../../../css/Button.css";

interface Button {
  children: {};
  danger?: boolean;
  disabled?: boolean;
  inverse?: boolean;
  onClick?: () => void;
  size?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

interface HrefButton extends Button {
  href: string;
}
interface LinkButton extends Button {
  to: string;
}

/** A modular button that accepts a range of parameters
 * @param {boolean} danger CSS styling: Sets to danger
 * @param {boolean} disabled CSS styling: Disables the button
 * @param {boolean} inverse CSS styling: Sets to inverted color scheme
 * @param {Function} onClick Determines the action (cannot be used with to)
 * @param {string} size CSS styling: Sets the button size
 * @param {React HTMLButtonElement} type Determines the type of button: from submit, button, reset
 *
 * Different params
 * @param {string} href A uri to visit. Switches to a href button.
 * @param {string} to A uri to visit. Switches to a react-router-dom link button.
 *
 * @returns A react object: A button, or a link of some type.
 */
const Button: React.FC<Button | HrefButton | LinkButton> = (
  props: Button | HrefButton | LinkButton
) => {
  if (isHref(props)) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.href}>
        {props.children}
      </a>
    );
  } else if (isLink(props)) {
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
  } else
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

/** Type checks props to ensure we have the switch functionality
 * This checks for the "href" attribute
 */
const isHref = (prop: Button | HrefButton | LinkButton): prop is HrefButton => {
  return (prop as HrefButton).href !== undefined;
};

/** Type checks props to ensure we have the switch functionality
 * This checks for the "to" attribute
 */
const isLink = (prop: Button | HrefButton | LinkButton): prop is LinkButton => {
  return (prop as LinkButton).to !== undefined;
};
