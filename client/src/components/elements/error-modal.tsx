import React from "react";

import { Modal } from "./modal";
import Button from "./forms/button";

interface Props {
  onClear: () => void;
  error: string;
}

export const ErrorModal: React.FC<Props> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}>
      <p>{props.error}</p>
    </Modal>
  );
};
