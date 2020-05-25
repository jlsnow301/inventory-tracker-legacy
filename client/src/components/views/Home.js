import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  // Styling
  const Container = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    padding: 20px;
  `;

  const TextRow = styled.div`
    display: flex;
    width: 50%;
    height: 50%;
  `;

  const Welcome = styled.div`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: Roboto, Georgia, "Times New Roman", Times, serif;
    padding-right: 30px;
  `;

  const Heading = styled.div`
    font-family: Roboto, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: #2b2d42;
  `;

  const Main = styled.p`
    text-align: justify;
  `;

  // Returns

  return (
    <Container>
      <Welcome>
        <h4>Welcome to the inventory app</h4>
      </Welcome>

      <Main>
        <p>
          <Heading>
            <h1>This is the landing page</h1>
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Main>
    </Container>
  );
};

export default Home;
