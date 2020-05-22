import React from "react";
import styled from "@emotion/styled";

const Home = () => {
  // Styling
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    height: 800px;
    background: rgb(235, 235, 235);
    padding: 20px;
    justify-content: space-around;
    overflow: auto;
    margin: 10px 10px;
  `;
  const Content = styled.div`
    margin-top: 5rem;
    margin-right: 2rem;
    font-family: Roboto, Georgia, Times, "Times New Roman", serif;
    font-size: 20px;
    text-align: justify;
  `;

  const Sidebar = styled.div`
    background: grey;
    margin-top: 2rem;
    font-size: 35px;
    height: 75%;
  `;

  // Returns
  return (
    <Container>
      <Content>
        <h1>This is the landing page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
      <Sidebar>We can put some pictures here?</Sidebar>
    </Container>
  );
};

export default Home;
