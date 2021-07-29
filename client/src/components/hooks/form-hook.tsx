import { useCallback, useReducer } from "react";

/** The Action type given to the reducer whether it be change or set. */
type Action =
  | { type: "INPUT_CHANGE"; inputId: string; value: string; isValid: boolean }
  | { type: "SET_DATA"; inputs: Input[]; formIsValid: boolean };

/** A little bit confused here and might not be complete.
 * @todo See if this is required or simply make it state: input[]
 * @param {Input[]} inputs An array of input objects.
 */
interface State {
  inputs: Input[];
}

/** Represents an individual form input. Placed in an array of input[] */
interface Input {
  inputId: string;
  isValid: boolean;
}

/** Form hook interface which ensures it accepts two parameters.
 * @param {Input[]} initialInputs An array of input objects
 * @param {boolean} initialFormValidity A boolean for validator/css interaction.
 */
interface FormHook {
  (initialInputs: Input[], initialFormValidity: boolean): [
    formState: State,
    inputHandler: InputHandler,
    setFormData: SetFormData
  ];
}

/** Input handler interface: Ensures this receives the proper parameters */
interface InputHandler {
  (id: string, value: string, isValid: boolean): void;
}

interface SetFormData {
  (inputData: Input[], formValidity: boolean): void;
}

/**
 * Reducer function for the useForm hook.
 * @param {Input[]} state The current array of inputs.
 * @param action The action taken to change these.
 * @returns The updated inputs.
 */
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          /** Typescript interprets this index as a string apparently */
          formIsValid = formIsValid && state.inputs[inputId].isValid;
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

/** A custom hook which features its own reducer and state management.
 * Accepts a variable number of inputs.
 * @param {Input[]} initialInputs The initial inputs, an array of objects
 * @param {boolean} initialFormValidity Swaps the form validity if a value is satisfied via validator.
 */
export const useForm: FormHook = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  /** Fires a callback function to change an input.
   * @param {string} id The array index... A string
   * @param {string} value The target value of the input
   * @param {boolean} isValid Validity of the form for css/validation
   */
  const inputHandler: InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData: SetFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);
  return [formState, inputHandler, setFormData];
};
