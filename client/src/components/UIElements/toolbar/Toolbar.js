// Module imports
import React, { useState } from "react";
//Local imports
import NavLinks from "./NavLinks";
import { useAuth } from "../../Hooks/auth-hook";
import Avatar from "./Avatar";
// Styling
import "../../../css/Toolbar.css";

const Toolbar = (props) => {
  // Initial states
  const { token, name, image } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

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
            <Avatar
              className="toolbar-avatar"
              image={`http://localhost:5000/${image}`}
              alt="User"
            />
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
