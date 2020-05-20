import React, { useState, useEffect } from "react";

const ProductData = (product) => {
  // Pools the tags associated with an item
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // This iterates through the inventory and posts as cards
  const displayDetails = (product) => {
    return inventoryItems.map((item, index) => <Card item={item.itemID} />);
  };

  return (
    <p>
      <Details />
    </p>
  );
};

export default ProductData;
