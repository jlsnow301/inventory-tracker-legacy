import React, { useState } from "react";
import styled from "@emotion/styled";
import InventoryDisplay from "./InventoryDisplay";
import Home from "../views/Home";
import PopupButton from "../toolbar/PopupButton";

const Dashboard = ({ username, loggedIn, devmode }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
  `;
  const Header = styled.div`
    display: flex;
    height: 4%;
    font-family: Merriweather;
    padding: 0px 5px;
  `;
  const Tools = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 
    padding-top: 15px;
  `;

  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  return (
    <Container>
      {!loggedIn && !devmode ? (
        <Home />
      ) : (
        <div>
          <Header>
            <h1>{devmode ? "Tester" : username}'s Inventory</h1>
            <div style={{ flex: 1 }}></div>

            <Tools>
              <PopupButton button="addItem" />
              <form onSubmit={(e) => handleSearch(e)}>
                <input
                  type="text"
                  ref={inputText}
                  placeholder="Enter keywords..."
                />
                <input type="submit" value="Submit" />{" "}
              </form>
            </Tools>
          </Header>
          <br />
          <div>
            <InventoryDisplay query={query} devmode={devmode} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
