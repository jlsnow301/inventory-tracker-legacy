import { ServerStreamFileResponseOptions } from "http2";
import { useCallback, useReducer } from "react";

type Action =
  | {
      type: "INPUT_CHANGE";
      inputId: string;
      value: string;
      isValid: boolean;
    }
  | { type: "SET_DATA"; inputs: Inputs; formIsValid: boolean };

interface State {
  inputs: Inputs;
  isValid: boolean;
}

interface Inputs {
  [inputId: string]: Input | undefined;
}

interface Input {
  value: string | null;
  isValid: boolean;
}

interface FormHook {
  (initialInputs: Inputs, initialFormValidity: boolean): [
    formState: State,
    inputHandler: (id: string, value: File | string, isValid: boolean) => void,
    setFormData: (inputData: Inputs, formValidity: boolean) => void
  ];
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs.inputId) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs.inputId.isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm: FormHook = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
