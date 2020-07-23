// Module imports
import React, { useContext } from "react";
//Local imports
import NavLinks from "./NavLinks";
import Avatar from "./Avatar";
import { useAuth } from "../../Hooks/auth-hook";
import { AuthContext } from "../../Functions/auth-context";
// Styling
import "../../../css/Toolbar.css";

const Toolbar = (props) => {
  // Initial states
  const { name, image } = useAuth();
  const { isLoggedIn } = useContext(AuthContext);

  // Returns
  return (
    <React.Fragment>
      {!isLoggedIn ? (
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
