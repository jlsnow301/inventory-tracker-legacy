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
    backgroundColor: "#FE2E2E",
    padding: "6px 8px",
    height: "100px",
  };
  const headerStyle = {
    color: "white",
    alignself: "stretch",
    fontSize: "40px",
    paddingLeft: "30px",
    margin: "auto",
    fontFamily: "Fira Sans",
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
              <Button>
                <a href='/about'>About</a>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <a href='/contact'>Contact</a>
              </Button>
            </NavItem>
            <NavItem>
              <PopupButton button='login' />
            </NavItem>
          </Nav>
        ) : (
          <Buttons>
            <PopupButton button='advsearch' />
            <PopupButton button='overview' />
            <PopupButton button='settings' />
          </Buttons>
        )}
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={(e) => handleSearch(e)}>Search</Button>
      </div>
    </header>
  );
};

export default Toolbar;
