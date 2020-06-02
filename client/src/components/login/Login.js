import React from "react";
import styled from "@emotion/styled";

/* Use these Comments to communicate Todos or other info
 * @Reminder - Readme.md has resources, use it
 * @Todo
 *
 */

const Login = ({ props }) => {
  // Styling
  const Container = styled.div`
    margin-top: 15px;
    font-family: Merriweather;
  `;

  const userText = React.createRef();
  const passText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: userText.current.value
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase()),
      devmode: false,
      userImg: "./logo1.png",
      loggedIn: true,
    };
    props.changeUser(user);
    props.changeTitle(`${user.username}'s Inventory`);
  };

  // Returns
  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" size="10" ref={userText} placeholder="username" />
        <input type="text" size="10" ref={passText} placeholder="password" />
        <input type="submit" value="Submit" />{" "}
      </form>
    </Container>
  );
};

export default Login;
