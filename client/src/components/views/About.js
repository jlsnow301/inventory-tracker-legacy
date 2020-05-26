import React from "react";
import styled from "@emotion/styled";

/* Use these Comments to communicate Todos or other info
 * @Reminder - Readme.md has resources, use it
 * @Todo
 *
 */
const About = () => {
  // Styling
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;
  `;
  const TextBox = styled.div`
    font-family: Merriweather;
    font-size: 16pt;
    width: 55%;
    margin-bottom: 20px;
  `;

  // Returns
  return (
    <Container>
      <TextBox>
        This project was created with the help of four sleepless coders! Reach
        us at our emails:
      </TextBox>
      <TextBox>
        <b>Anthony</b>: stenbergdigeronimo@gmail.com
        <br />
        <b>Margarita</b>: pearlmargaret2012@gmail.com
        <br />
        <b>Selina</b>: selinapn@outlook.com
        <br />
        <b>Jeremiah</b>: jlsnow.301@gmail.com
        <br />
      </TextBox>
    </Container>
  );
};

export default About;
