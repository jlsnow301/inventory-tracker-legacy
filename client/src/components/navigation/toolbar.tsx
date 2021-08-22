import React, { useContext } from "react";

import { AuthContext } from "../functions/auth-context";
import NavLinks from "./navlinks";

import "../../css/toolbar.css";

/** Toolbar component that renders a top bar, showing logo, slogan, nav links.
 *
 * If logged in: Displays "{username}`s inventory" */
const Toolbar: React.FC = () => {
  let bannerInfo = GetInfo();

  return (
    <div className="toolbar-main">
      {bannerInfo}
      <NavLinks />
    </div>
  );
};

export default Toolbar;

const GetInfo = () => {
  const { isLoggedIn, name, image } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div className="toolbar-info">
        <img src={image || "./public/drugitol.png"} alt="Profile" />
        <h2>{name}'s Inventory</h2>
      </div>
    );
  } else {
    return (
      <div className="toolbar-info">
        <img src={"./public/drugitol.png"} alt="Inventory Manager Logo" />
        <h1>INVENTORY MANAGER</h1>
      </div>
    );
  }
};
