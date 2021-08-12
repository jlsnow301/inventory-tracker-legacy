import React, { useContext } from "react";

import { AuthContext } from "../functions/auth-context";
import Button from "../elements/button";

import "../../css/navlinks.css";

/** Type for the getlinks function. Provides modularity for links */
interface LinkFunction {
  (): void;
}

/** Provides buttons to connect to other pages
 * @returns {Object} An unordered list with modular list items
 */
const NavLinks: React.FC = () => {
  let links = getLinks();

  return (
    <div className="nav-links">
      <Button to="/">HOME</Button>
      {links}
    </div>
  );
};

/** Upon reading the user login state, returns the proper navlinks
 * @returns {Object} A react fragment containing multiple nav links.
 */
const getLinks = () => {
  const { isLoggedIn, userId, logout } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <>
        <Button to={`/${userId}/advanced`}>ADVANCED</Button>
        <Button to={`/${userId}/overview`}>OVERVIEW</Button>
        <Button to={`/${userId}/settings`}>SETTINGS</Button>
        <button onClick={logout}>LOGOUT</button>
      </>
    );
  } else {
    return (
      <>
        <Button to="/about">ABOUT</Button>
        <Button to="/contact">CONTACT</Button>
        <Button to="/login">LOGIN</Button>
      </>
    );
  }
};

export default NavLinks;
