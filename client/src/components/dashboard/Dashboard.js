import React, { useState } from "react";
import styled from "@emotion/styled";
import Home from "../views/Home";
import InventoryDisplay from "./InventoryDisplay";
import PopupButton from "../toolbar/PopupButton";

const Dashboard = ({ props: { user } }) => {
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
  const [labels, setLabels] = useState([]);
  const inputText = React.createRef();

  // This gets the labels from card components and passes to addItem
  const updateLabels = (arr) => {
    setLabels(arr);
  };

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  // Props for child components
  const newProps = { query, updateLabels };
  // Returns
  return (
    <Container>
      {!user.loggedIn && !user.devmode ? (
        <Home />
      ) : (
        <div>
          <Header>
            <h1>
              <b>Item View</b>
            </h1>
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
            <InventoryDisplay props={newProps} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
