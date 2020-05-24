import React, { useState } from "react";
import styled from "@emotion/styled";
import InventoryDisplay from "./InventoryDisplay";

const Dashboard = ({ ukey, devmode }) => {
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

  // Initial state
  const [query, setQuery] = useState("");
  const inputText = React.createRef();
  const [login, setLogin] = useState(false);

  // Validation if there is a user with the user's name
  // For now, unless devmode is enabled, you need one of our names
  var users = ["Anthony", "Selina", "Margarita", "Jerm"];
  const GetLogin = () => {
    console.log(`Displaying inventory of user: ${ukey}`);
    return users.indexOf(ukey) >= 0 ? setLogin(true) : setLogin(false);
  };

  // Changes the query, which is passed to inventory display.
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(inputText.current.value);
  };

  return (
    <div>
      <GetLogin />
      {!login && !devmode ? (
        <Home />
      ) : (
        <Container>
          <Header>
            <h1>{ukey}'s Inventory</h1>
            <div style={{ flex: 1 }}></div>
            <div style={{ paddingTop: 12 }}>
              <form onSubmit={(e) => handleSearch(e)}>
                <input
                  type="text"
                  ref={inputText}
                  placeholder="Enter keywords..."
                />
                <input type="submit" value="Submit" />{" "}
              </form>
            </div>
          </Header>
          <br />
          <div>
            <InventoryDisplay query={query} devmode={devmode} />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
