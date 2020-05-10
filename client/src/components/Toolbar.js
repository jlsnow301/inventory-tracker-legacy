import React, { useState } from "react";
import PopupButton from "./PopupButton";
import styled from "@emotion/styled";
import { Nav, NavItem, Button } from "reactstrap";

{
  /* Use these Comments to communicate Todos or other info
   * @Reminder - Readme.md has resources, use it
   * @Todo
   *
   *
   */
}
const Toolbar = ({ ukey }) => {
  // Styles
  const toolbarStyle = {
    display: "flex",
    alignself: "stretch",
    backgroundColor: "#edddd4",
    padding: "6px 8px",
    height: "100px",
    fontFamily: "Roboto Slab",
    marginBottom: "20px",
  };
  const headerStyle = {
    color: "#197278",
    alignself: "stretch",
    fontSize: "40px",
    paddingLeft: "30px",
    margin: "auto",
  };

  const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  // Handles buttons
  const loggedIn = ukey == null;
  const [query, setQuery] = useState("");

  // Get the search, if logged in
  const handleSearch = (e) => {
    e.preventDefault();
    getItem(query);
  };

  // Database call
  const getItem = (q, ukey) => {};

  const buttonStyling = {
    backgroundColor: "#edddd4",
    border: "none",
  };
  const searchButtonStyling = {
    backgroundColor: "#edddd4",
    border: "none",
    color: "#772e25",
  };

  const buttonLinkStyling = {
    color: "#772e25",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "1px",
  };

  // Returns the toolbar
  return (
    <header style={toolbarStyle}>
      <a href='/'>
        <img
          className='icon'
          src='this_is_fine.png'
          alt='Logo'
          height='70'
          width='70'
        />
      </a>
      <p style={headerStyle}>Slogan</p>
      <div style={{ flex: 1 }}></div>
      <div>
        {loggedIn ? (
          <Nav>
            <NavItem>
              <Button style={buttonStyling}>
                <a href='/about' style={buttonLinkStyling}>
                  About
                </a>
              </Button>
            </NavItem>
            <NavItem>
              <Button style={buttonStyling}>
                <a href='/contact' style={buttonLinkStyling}>
                  Contact
                </a>
              </Button>
            </NavItem>
            <NavItem>
              <PopupButton button='login' />
            </NavItem>
          </Nav>
        ) : (
          <Buttons>
            <PopupButton button='advsearch' style={buttonLinkStyling} />
            <PopupButton button='overview' style={buttonLinkStyling} />
            <PopupButton button='settings' style={buttonLinkStyling} />
          </Buttons>
        )}
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={(e) => handleSearch(e)} style={searchButtonStyling}>
          Search
        </Button>
      </div>
    </header>
  );
};

export default Toolbar;
