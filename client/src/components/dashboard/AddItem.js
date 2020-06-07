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
    // Not using object.keys here because I wanted to iterate through an array of keys it receives from props
    for (let label of labels) {
      forms.push(
        <div>
          <label>{label}</label>
          <div className="control">
            <input
              type="text"
              onChange={changeHandler}
              name={label}
              value={item[label]}
            />
          </div>
        </div>
      );
    }
    return forms;
  };

  // Takes the item and updates an individual attribute
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Notice how addItem and addInventory look almost identical, this makes me want to just make a form
  // creator for both that receive a prop
  const onSubmitItem = (e) => {
    e.preventDefault();
    console.log(`Sending package:`);
    console.log(item);
    PostHttp(`items`, item);
  };

  // Returns
  return (
    <div>
      <form onSubmit={(e) => onSubmitItem(e)}>
        <div className="field">
          <GetLabels />
        </div>
        <br />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
