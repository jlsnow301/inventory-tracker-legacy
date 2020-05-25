import React from "react";
import styled from "@emotion/styled";
import  Layout  from "./components/Layout";
import Toolbar from "./components/toolbar/Toolbar";
import Dashboard from "./components/dashboard/Dashboard";

/* @Reminder - Readme.md has resources, use it
 *
 * @Todo
 * - Constructor will be needed
 * - build the views for home, about, contact
 * - Make the routes and views for:
 *   - Settings
 *   - Dashboard
 *   - Quick Start
 * <InventoryDisplay />
 */

const App = () => {
  // Styling
  const Body = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 10px 0px;
    justify-content: center;
  `;

<<<<<<< HEAD
{
  /* @Reminder - Readme.md has resources, use it
   *
   * @Todo
   * - Constructor will be needed
   * - build the views for home, about, contact
   * - Make the routes and views for:
   *   - Settings
   *   - Dashboard
   *   - Quick Start
   * <InventoryDisplay />
   */
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <Toolbar />
        </div>

        <Layout>
          <Router>
            {/* Browser routing for home page */}
            <Route path="/" exact component={Home}></Route>
            {/* Browser routing for About page */}
            <Route path="/about" exact component={About}></Route>
            {/* Browser routing for Contact page */}
            <Route path="/contact" exact component={Contact}></Route>
            {/* Browser routing for Dashboard */}
            <Route path="/dashboard" exact component={InventoryDisplay}></Route>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
=======
  // Validation if there is a user with the user's name
  // For now, unless devmode is enabled, you need one of our names
  var users = ["anthony", "selina", "margarita", "jerm"];

  // TEST -> inserting a userkey
  const username = String(prompt("Enter a username: ")).toLowerCase();
  const loggedIn = users.indexOf(username) >= 0;
  var devmode = String(prompt("Dev mode? Type Y or N: ")).toLowerCase();
  devmode = devmode === "y";

  // Returns
  return (
    <div>
      <div>
        <Toolbar username={username} loggedIn={loggedIn} devmode={devmode} />
      </div>
      <Body>
        <Dashboard username={username} loggedIn={loggedIn} devmode={devmode} />
      </Body>
    </div>
  );
};
>>>>>>> dev

export default App;
