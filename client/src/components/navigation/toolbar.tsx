import React, { useContext } from "react";

import { AuthContext } from "../functions/auth-context";
import { NavLinks } from "./navlinks";

import "../../css/toolbar.css";

/** Toolbar component that renders a top bar, showing logo, slogan, nav links.
 *
 * If logged in: Displays "{username}`s inventory" */
export const Toolbar: React.FC = () => {
  const { isLoggedIn, name } = useContext(AuthContext);

  /** Todo: Fill this auth value in for custom user image */
  let image;

  return (
    <div className="toolbar-container">
      <div className="toolbar-info">
        <img src={image} alt="Profile" />
        {isLoggedIn && (
          <div className="toolbar-name">
            <h2>{name}'s Inventory</h2>
          </div>
        )}
      </div>
      <NavLinks />
    </div>
  );
};
