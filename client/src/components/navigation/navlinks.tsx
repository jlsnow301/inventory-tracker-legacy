import React, { useContext } from "react";

import { AuthContext } from "../functions/auth-context";
import ModButton from "../elements/button";

import "../css/navlinks.css";

/** Provides buttons to connect to other pages
 * @returns {Object} An unordered list with modular list items
 */
const NavLinks: React.FC = () => {
  let links: JSX.Element = GetLinks();

  return (
    <div className="nav-links">
      <ModButton to="/">HOME</ModButton>
      {links}
    </div>
  );
};

/** Upon reading the user login state, returns the proper navlinks
 * @returns {Object} A react fragment containing multiple nav links.
 */
const GetLinks = (): JSX.Element => {
  const { isLoggedIn, userId, logout } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <>
        <ModButton to={`/${userId}/advanced`}>ADVANCED</ModButton>
        <ModButton to={`/${userId}/overview`}>OVERVIEW</ModButton>
        <ModButton to={`/${userId}/settings`}>SETTINGS</ModButton>
        <button onClick={logout}>LOGOUT</button>
      </>
    );
  } else {
    return (
      <>
        <ModButton to="/about">ABOUT</ModButton>
        <ModButton to="/contact">CONTACT</ModButton>
        <ModButton to="/login">LOGIN</ModButton>
      </>
    );
  }
};

export default NavLinks;
