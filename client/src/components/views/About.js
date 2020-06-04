import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styled from "@emotion/styled";

const About = () => {
  const Container = styled.div`
    margin-left: 30px;
  `;

  const ImgBox = styled.div`
    align: center;
  `;
  const ImgIcon = styled.div`
    width: 150px;
    margin-left: 20%;
    margin-bottom: 15%;
  `;

  const Banner = styled.div`
    width: 100%;
  `;

  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Banner>
            <img src="./aboutBanner.jpg" width=" 100% " alt="banner" />
          </Banner>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>volutpat</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
          <Grid.Column>
            <h1>venenatis</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column>
            <ImgBox>
              <ImgIcon>
                <img src="./human.png" width=" 100% " alt="icon" />
              </ImgIcon>
            </ImgBox>
            <h1>Anthony</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <ImgBox>
              <ImgIcon>
                <img src="./human.png" width=" 100% " alt="icon" />
              </ImgIcon>
            </ImgBox>
            <h1>Margarita</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <ImgBox>
              <ImgIcon>
                <img src="./human.png" width=" 100% " alt="icon" />
              </ImgIcon>
            </ImgBox>
            <h1>Jeremiah</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <ImgBox>
              <ImgIcon>
                <img src="./human.png" width=" 100% " alt="icon" />
              </ImgIcon>
            </ImgBox>
            <h1>Selina</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default About;
