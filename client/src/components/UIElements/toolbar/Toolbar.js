// Module imports
import React from "react";
//Local imports
import NavLinks from "./NavLinks";
import { useAuth } from "../../Hooks/auth-hook";

// Styling
import "../../../css/Toolbar.css";

const Toolbar = (props) => {
  // Initial states
  const { token, name, image } = useAuth();
  console.log(image);

  // Returns
  return (
    <React.Fragment>
      {!token ? (
        <div className="toolbar-container">
          <div className="toolbar-info">
            <img
              className="toolbar-company"
              src={`./logo1.png`}
              alt="Company"
            />
          </div>
          <div style={{ flex: 1 }} />
          <NavLinks />
        </div>
      ) : (
        <div className="toolbar-container">
          <div className="toolbar-info">
            <img className="toolbar-avatar" src="./memeguy.png" alt="User" />
            <div className="toolbar-name">
              <h2>{name.toString()}'s Inventory</h2>
            </div>
          </div>
          <div style={{ flex: 1 }} />
          <NavLinks />
        </div>
      )}
    </React.Fragment>
  );
};

export default Toolbar;
