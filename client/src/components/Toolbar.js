import React, { useState } from "react";
import PopupButton from "./PopupButton";
import styled from "@emotion/styled";

const Toolbar = ({ ukey }) => {
  // Styles
  const toolbarStyle = {
    display: "flex",
    alignself: "stretch",
    backgroundColor: "#FE2E2E",
    padding: "6px 8px",
    height: "75px",
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
    <div style={toolbarStyle}>
      <img
        className="icon"
        src="this_is_fine.png"
        alt="Logo"
        height="70"
        width="70"
      />
      <p style={headerStyle}>Slogan</p>
      <div style={{ flex: 1 }}></div>
      {!loggedIn ? (
        <Buttons>
          <PopupButton button="login" />
          <PopupButton button="about" />
          <PopupButton button="contact" />
        </Buttons>
      ) : (
        <div>
          <Buttons>
            <PopupButton button="advsearch" />
            <PopupButton button="overview" />
            <PopupButton button="settings" />
          </Buttons>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={(e) => handleSearch(e)}>Search</button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
