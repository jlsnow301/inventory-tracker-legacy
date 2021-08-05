import React, { useReducer, useEffect } from "react";

import { validate, Validator } from "../../functions/validators";
import "../../../css/";

type Action =
  | { type: "CHANGE"; value: string; validators: Validator[] }
  | { type: "TOUCH" };

interface State {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

/** Reducer to detect input types */
const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

/** Extra parameters to this allow it to be modular */
interface Props {
  element: string;
  errorText: string;
  id: string;
  initialValue: string;
  initialValid: boolean;
  onInput: (id: string, value: string, isValid: boolean) => {};
  label?: string;
  placeholder?: string;
  rows?: number;
  type?: string;
  validators: Validator[];
}

/** A custom input component that allows validation, css reaction to validation, etc. */
export const Input: React.FC<Props> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event: React.FormEvent) => {
    let target = event.target as HTMLInputElement;
    dispatch({
      type: "CHANGE",
      value: target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
