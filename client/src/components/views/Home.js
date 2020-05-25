import React, { Component } from "react";
import styled from "@emotion/styled";

const Home = () => {
  const Container = styled.div`
    padding: 20px;
  `;

  const rowAlign = styled.div`
    margin: 0 auto;
  `;

  return (
    <Container>
      <rowAlign>
        <div className="col-12 col-md-6 text-center text-md-left">
          <div className="section-heading mb-3">
            <h4>Welcome</h4>
            <h1 className="display-4">This is the landing page</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <imgNew>
          <img src="./bgCapsules.jpg" alt="Image" height="60px" width="60px" />
        </imgNew>
      </rowAlign>
    </Container>
  );
};

export default Home;
