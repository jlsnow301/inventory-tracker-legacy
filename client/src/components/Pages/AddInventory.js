import React, { useState } from "react";

import PostHttp from "../Functions/AxiosHttp";
import { useForm } from "../Hooks/form-hook";

const AddInventory = (props) => {
  //Styling

  // Initial state
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  // Need to convert to reducer
  const [inventory, setInventory] = useState({
    name: "",
    access: "",
    date: "",
    count: "",
    items: [],
    owner: "",
    history: "",
    description: "",
  });

  // We could probably make this a component somewhere else and use it in any addX
  const GetForm = () => {
    var arr = [];
    Object.keys(inventory).forEach((key) =>
      arr.push(
        <div key={key} className="field">
          <label>{key}</label>
          <div className="control">
            <input
              type="text"
              required
              onChange={changeHandler}
              name={key}
              value={inventory[key]}
            />
          </div>
        </div>
      )
    );
    return arr;
  };

  // Takes the inventory and updates an individual attribute
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInventory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form
  const onSubmitInventory = (e) => {
    e.preventDefault();
    console.log(`Sending package:`);
    console.log(inventory);
    PostHttp(`inventory`, inventory);
  };

  // Returns
  return (
    <div>
      <form onSubmit={(e) => onSubmitInventory(e)}>
        <GetForm />
        <br />
        <button>Add Inventory</button>
      </form>
    </div>
  );
};

export default AddInventory;
