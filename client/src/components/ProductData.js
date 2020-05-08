import React, { useState, useEffect } from "react";

const ProductData = ({ product }) => {
  // Pools the tags associated with an item
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDefinitions = async (product) => {
    setDefinitions(product);
    setLoading(true);
    try {
      const apiRes = await fetch();
      // Database call here
      const resJSON = await apiRes.json();
      setDefinitions({
        //Set the tags here,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <p>
      <b>key: </b>value
      <br />
      <b>key: </b>value
      <br />
      <b>key: </b>value
      <br />
    </p>
  );
};

export default ProductData;
