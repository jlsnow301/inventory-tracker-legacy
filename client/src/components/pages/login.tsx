import React, { useState, useContext } from "react";

import { AuthContext } from "../functions/auth-context";
import { useAxios } from "../hooks/axios-hook";
import { UserData } from "../hooks/auth-hook";
import Button from "../elements/button";
import Card from "../elements/card";
import ErrorModal from "../elements/error-modal";
import { useForm } from "../hooks/form-hook";
import ImageUpload from "../elements/forms/image-upload";
import Input from "../elements/forms/input";
import LoadingSpinner from "../elements/loading-spinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../functions/validators";

import "../../css/login.css";

const LoginScreen: React.FC = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useAxios();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  /**
   * User presses SWITCH TO LOGIN/SIGNUP: Changes form data
   * @param {state} isLoginMode - Login default. Current mode
   */
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          email: undefined,
          image: undefined,
          name: undefined,
          password: undefined,
        },
        formState.inputs.email!.isValid && formState.inputs.password!.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          email: {
            value: "",
            isValid: false,
          },
          password: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  /**
   * User presses LOGIN or SIGN UP: Sends the respective request & data
   * @param {*} event - Click
   * @param {state} formState - What is currently typed in
   */
  const authSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData: UserData = await sendRequest(
          "http://localhost:5000/api/users",
          "POST",
          {
            /** TODO: Ensure these are not null */
            email: formState.inputs.email!.value,
            password: formState.inputs.password!.value,
          }
        );
        if (responseData.token) {
          auth.login(responseData.token);
        }
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        /** TODO: Ensure these are not null */
        formData.append("email", formState.inputs.email!.value!);
        formData.append("image", formState.inputs.image!.value!);
        formData.append("name", formState.inputs.name!.value!);
        formData.append("password", formState.inputs.password!.value!);
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/create",
          "POST",
          formData
        );
        auth.login(responseData.token);
      } catch (err) {}
    }
  };

  return (
    <>
      <ErrorModal error={error!} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 style={{ color: "black" }}>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          {!isLoginMode && (
            <>
              <ImageUpload
                center
                id="image"
                onInput={inputHandler}
                errorText="Please provide an image."
              />

              <Input
                element="input"
                id="name"
                type="text"
                label="Your Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a name."
                onInput={inputHandler}
              />
            </>
          )}
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <Button
            disabled={!formState.isValid}
            onClick={() => null}
            type="submit">
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button onClick={switchModeHandler} type="button">
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </>
  );
};

export default LoginScreen;
