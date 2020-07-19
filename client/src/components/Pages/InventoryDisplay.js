// Module imports
import React, { useState, useEffect } from "react";
import Axios from "axios";
// Local imports
import InventoryCard from "../UIElements/InventoryCard";
import ErrorModal from "../UIElements/ErrorModal";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import { useAuth } from "../Hooks/auth-hook";
// Styling
import "../../css/InventoryDisplay.css";

const InventoryDisplay = (props) => {
  // Initial states.
  const { token, userId } = useAuth();
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const GetInventory = () => {
    let cards = [];
    Object.keys(inventory).forEach((key) =>
      cards.push(
        <InventoryCard
          label="Container"
          key={key}
          index={key}
          item={inventory[key]}
        />
      )
    );
    return cards;
  };

  useEffect(() => {
    if (token) {
      setLoading(true);
      const fetchInventory = async () => {
        Axios.get(`http://localhost:5000/api/inventories/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => setInventory(res.data.inventories))
          .catch((err) => setError(err));
      };
      fetchInventory();
      setLoading(false);
    }
  }, [userId, token]);

  useEffect(() => {
    if (props.query !== "") {
      setLoading(true);
      const fetchInventory = async () => {
        Axios.get(`http://localhost:5000/api/inventories/${props.query}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) =>
            res.data.inventories
              ? setInventory(res.data.inventories)
              : console.log(false)
          )
          .catch((err) => setError(err));
      };
      fetchInventory();
      setLoading(false);
    }
  }, [props, token]);

  // Returns
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={(error) => !error} />
      <div className="container">
        {loading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!loading && inventory && <GetInventory />}
      </div>
    </React.Fragment>
  );
};

export default InventoryDisplay;
