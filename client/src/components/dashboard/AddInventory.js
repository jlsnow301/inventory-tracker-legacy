import React, { useState } from "react";
import Axios from "axios";
import Modal from 'react-modal';

const AddInventory = () => {
  /******/
  const [inventoryName, setInventoryName] = useState("");
  const [inventoryAccess, setInventoryAccess] = useState("");
  const [inventoryDate, setInventoryDate] = useState("");
  const [inventoryCount, setInventoryCount] = useState("");
  const [inventoryItems, setInventoryItems] = useState("");
  const [inventoryOwner, setInventoryOwner] = useState("");
  const [inventoryHistory, setInventoryHistory] = useState("");
  const [inventoryDescription, setInventoryDescription] = useState("");

  /******/
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMsg, setSuccessModalMsg] = useState("");

  const onSubmitInventory = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/inventory", {
      name: inventoryName,
      description: inventoryDescription,
      owner: inventoryOwner,
      access: inventoryAccess,
      date: inventoryDate,
      items: inventoryItems,
      inventoryCount,
      history: inventoryHistory,
    }).then((res) => {
      if (res.data.status === "1") {
        setSuccessModalMsg(res.data.message);
        setIsSuccessModalOpen(true);
      }
    });

    setInventoryName("");
    setInventoryDescription("");
    setInventoryOwner("");
    setInventoryAccess("");
    setInventoryHistory("");
    setInventoryDate("");
    setInventoryCount("");
    setInventoryItems("");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmitInventory(e)}>
        <div className="field">
          <label>Name</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryName}
              onChange={(e) => setInventoryName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Owner</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryOwner}
              onChange={(e) => setInventoryOwner(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>History</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryHistory}
              onChange={(e) => setInventoryHistory(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Items</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryItems}
              onChange={(e) => setInventoryItems(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Access</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryAccess}
              onChange={(e) => setInventoryAccess(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Count</label>
          <div className="control">
            <input
              type="text"
              required
              value={inventoryCount}
              onChange={(e) => setInventoryCount(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Date</label>
          <div className="control">
            <input
              type="date"
              value={inventoryDate}
              onChange={(e) => setInventoryDate(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <div className="control">
            <textarea
              required
              value={inventoryDescription}
              onChange={(e) => setInventoryDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button>Add Inventory</button>
      </form>

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={() => setIsSuccessModalOpen(false)}
      >
        <div>
          <button onClick={() => setIsSuccessModalOpen(false)}>Close</button>
        </div>
        <p>{successModalMsg}</p>
      </Modal>
    </div>
  );
};

export default AddInventory;
