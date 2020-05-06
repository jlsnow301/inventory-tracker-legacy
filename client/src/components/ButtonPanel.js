import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Nav, NavItem, Button } from "reactstrap";

import PopupButton from "./PopupButton";

const ButtonPanel = ({ ukey }) => {
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

  return (
    <div>
      {loggedIn ? (
        <Nav>
          <NavItem>
            <Button>
              <a href="/about">About</a>
            </Button>
          </NavItem>
          <NavItem>
            <Button>
              <a href="/contact">Contact</a>
            </Button>
          </NavItem>
          <NavItem>
            <PopupButton button="login" />
          </NavItem>
        </Nav>
      ) : (
        <Buttons>
          <PopupButton button="advsearch" />
          <PopupButton button="overview" />
          <PopupButton button="settings" />
        </Buttons>
      )}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={(e) => handleSearch(e)}>Search</Button>
    </div>
  );
};

export default ButtonPanel;
