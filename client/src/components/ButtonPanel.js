import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
//import { Nav, NavItem, Button } from "reactstrap";

import PopupButton from "./PopupButton";

const ButtonPanel = (ukey) => {
  const Buttons = styled.div`
    display: flex;
    padding: 10px 0px;
    flex-direction: row;
    justify-content: flex-start;
  `;

  // Handles buttons
  console.log(ukey);
  const loggedIn = ukey != null;
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
        <Buttons>
          <PopupButton button="about" />
          <PopupButton button="contact" />
          <PopupButton button="login" />
        </Buttons>
      ) : (
        <Buttons>
          <PopupButton button="advsearch" />
          <PopupButton button="overview" />
          <PopupButton button="settings" />
        </Buttons>
      )}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </div>
  );
};

export default ButtonPanel;
