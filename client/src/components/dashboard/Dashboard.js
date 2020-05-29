import React, { useState } from "react";
import styled from "@emotion/styled";
import InventoryDisplay from "./InventoryDisplay";
import Home from "../views/Home";
import PopupButton from "../toolbar/PopupButton";

const Dashboard = ({ props }) => {
  // Styling
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
  `;
  const Header = styled.div`
    display: flex;
    height: 4%
    flex-direction: space-around;
    font-family: Merriweather;
  `;
  const Tools = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
  `;

  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  // Returns
  return (
    <Container>
      {!props.user.loggedIn && !props.user.devmode ? (
        <Home />
      ) : (
        <div>
          <Header>
            <div style={{ paddingTop: 10 }}>
              <h1>
                <b>Item View</b>
              </h1>
            </div>
            <div style={{ flex: 1 }}></div>
            <Tools>
              <PopupButton button="addItem" />
              <PopupButton button="addInventory" />
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

          <div>
            <InventoryDisplay query={query} props={props} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
