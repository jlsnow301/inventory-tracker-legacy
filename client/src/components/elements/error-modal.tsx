import React from "react";

import Modal from "./modal";
import ModButton from "./button";

interface Props {
  onClear: () => void;
  error: string;
}

const ErrorModal: React.FC<Props> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={
        <ModButton onClick={props.onClear} type="button">
          Okay
        </ModButton>
      }>
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
