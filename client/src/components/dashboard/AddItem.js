import React, { useState } from "react";
import PostHttp from "./AxiosHttp";

const AddItem = (props) => {
  // Styling

  // Initial state
  const [item, setItem] = useState({
    name: "",
    description: "",
    owner: "",
    history: "",
    items: "",
    access: "",
    inventoryCount: "",
    date: "",
  });
  const [labels, setLabels] = useState([
    `name`,
    `description`,
    `owner`,
    `history`,
    `items`,
    `access`,
    `inventoryCount`,
    `date`,
  ]);

  const GetLabels = () => {
    var forms = [];
    for (let label of labels) {
      forms.push(
        <div>
          <label>{label}</label>
          <div className="control">
            <input type="text" />
          </div>
        </div>
      );
    }
    return forms;
  };

  const onSubmitItem = (e) => {
    e.preventDefault();
    PostHttp(`items`, item);
  };

  // Returns
  return (
    <div>
      <form onSubmit={(e) => onSubmitItem(e)}>
        <div className="field">
          <GetLabels />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
