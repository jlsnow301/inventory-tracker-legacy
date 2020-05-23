import React, { useState } from "react";
import styled from "@emotion/styled";
//import { Nav, NavItem, Button } from "reactstrap";

import PopupButton from "./PopupButton";

const ButtonPanel = (ukey) => {
  // Styling
  const Container = styled.div`
    display: flex;
    padding: 10px 0px;

    justify-content: flex-start;
  `;

  // Handles buttons
  console.log(ukey);
  const loggedIn = ukey == null;
  const [query, setQuery] = useState("");

  // Get the search, if logged in
  const handleSearch = (e) => {
    e.preventDefault();
    getItem(query);
  };

  // Database call
  const getItem = (q, ukey) => {};

  // Returns
  return (
    <div>
      {loggedIn ? (
        <Container>
          <PopupButton button="about" />
          <PopupButton button="contact" />
          <PopupButton button="login" />
        </Container>
      ) : (
        <Container>
          <PopupButton button="advsearch" />
          <PopupButton button="overview" />
          <PopupButton button="settings" />
        </Container>
      )}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </div>
  );
};

export default ButtonPanel;
