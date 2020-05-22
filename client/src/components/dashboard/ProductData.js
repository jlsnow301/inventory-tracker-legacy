import React from "react";

const ProductData = (product) => {
  // Styling

  // This iterates through the inventory and posts as cards
  const DisplayDetails = (product) => {
    return product.map((detail, index) => (
      <p>
        {detail}: {detail.value}
      </p>
    ));
  };

  // Returns
  return (
    <p>
      <DisplayDetails />
    </p>
  );
};

export default ProductData;
