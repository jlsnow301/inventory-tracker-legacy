import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../functions/auth-context";

import "../../css/navlinks.css";

/** Type for the getlinks function. Provides modularity for links */
interface LinkFunction {
  (): void;
}

/** Provides buttons to connect to other pages
 * @returns {Object} An unordered list with modular list items
 */
export const NavLinks: React.FC = () => {
  let links = getLinks();

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
        {links}
      </li>
    </ul>
  );
};

/** Upon reading the user login state, returns the proper navlinks
 * @returns {Object} A react fragment containing multiple nav links.
 */
const getLinks: LinkFunction = (): {} => {
  const { isLoggedIn, userId, logout } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <li>
          <NavLink to={`/${userId}/advanced`}>ADVANCED</NavLink>
        </li>
        <li>
          <NavLink to={`/${userId}/overview`}>OVERVIEW</NavLink>
        </li>

        <li>
          <NavLink to={`/${userId}/settings`}>SETTINGS</NavLink>
        </li>
        <li>
          <button onClick={logout}>LOGOUT</button>
        </li>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>

        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </React.Fragment>
    );
  }
};
