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
    font-family: Merriweather;
  `;
  const inputText = React.createRef();

  // Changes the query, which is passed to inventory display.
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: inputText.current.value.replace(/^\w/, (c) => c.toUpperCase()),
      devmode: true,
      userImg: "./memeguy.png",
      loggedIn: true,
    };
    props.changeUser(user);
    props.changeTitle(`${user.username}'s Inventory`);
  };

  // Returns
  return (
    <Container>
      <h1>Login page</h1>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={inputText} placeholder="Enter Username..." />
        <input type="submit" value="Submit" />{" "}
      </form>
    </Container>
  );
};

export default Login;
