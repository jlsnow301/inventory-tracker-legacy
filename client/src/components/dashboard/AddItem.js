import React, { useState } from "react";
import PostHttp from "./AxiosHttp";

const AddItem = () => {
  /******/
  const [item, setItem] = useState({
    Generic_Name: "",
    Brand_Name: "",
    Company: "",
    Dosage: 0,
    Count: 0,
    Expiry: "05/29/2020",
  });

  const onSubmitItem = (e) => {
    e.preventDefault();
    PostHttp(`items`, item);
  };

  // THIS IS NOT FINISHED. Need to think up a better method that actually returns the variables.
  // However, I can't seem to put variables inside of variables (lol) like value={item.{value}}
  const FormSubmission = ({ label, attribute, value }) => {
    return (
      <div>
        <form onSubmit={(e) => onSubmitItem(e)}>
          <div className="field">
            <label>{label}</label>
            <div className="control">
              <input
                type="text"
                required
                value={attribute}
                onChange={(e) => setItem({ ...item, value: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <FormSubmission
        label="Generic Name"
        attribute="item.Generic_Name"
        value="Generic_Name"
      />
      <FormSubmission
        label="Brand Name"
        attribute="item.Brand_Name"
        value="Brand_Name"
      />
      <FormSubmission
        label="Company"
        attribute="item.Company"
        value="Company"
      />
      <FormSubmission label="Dosage" attribute="item.Dosage" value="Dosage" />
      <FormSubmission label="Quantity" attribute="item.Count" value="Count" />
      <FormSubmission
        label="Expiration"
        attribute="item.Expiry"
        value="Expiry"
      />
    </div>
  );
};

export default AddItem;
