// Module imports
import React, { useState, useEffect, useContext } from "react";
//Local imports
import NavLinks from "./NavLinks";
import { useAuth } from "../../Hooks/auth-hook";
import { AuthContext } from "../../Functions/auth-context";
// Styling
import "../../../css/Toolbar.css";

const Toolbar = (props) => {
  // Initial states
  const { name, image } = useAuth();
  const { isLoggedIn } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(`./logo1.png`);
  const [className, setClassName] = useState(`toolbar-company`);

  useEffect(() => {
    if (isLoggedIn) {
      setAvatar(`http://localhost:5000/${image}`);
      setClassName(`toolbar-avatar`);
    } else {
      setAvatar(`./logo1.png`);
      setClassName(`toolbar-company`);
    }
  }, [isLoggedIn, image]);

  // Returns
  return (
    <div className="toolbar-container">
      <div className="toolbar-info">
        <img className={className} src={avatar} alt="Profile" />
        {isLoggedIn && (
          <div className="toolbar-name">
            <h2>{name.toString()}'s Inventory</h2>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }} />
      <NavLinks />
    </div>
  );
};

export default Toolbar;
