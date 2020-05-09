import React, { Component } from "react";
import "./App.css";
import styled from "@emotion/styled";

import Toolbar from "./components/Toolbar";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Contact from "./components/views/Contact";

import InventoryDisplay from "./components/InventoryDisplay";

const Body = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

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
   *
   */
}
class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Toolbar />
        </div>
        <Router>
          {/* Browser routing for home page */}
          <Route path="/" exact component={Home}></Route>
          {/* Browser routing for About page */}
          <Route path="/about" exact component={About}></Route>
          {/* Browser routing for Contact page */}
          <Route path="/contact" exact component={Contact}></Route>
        </Router>
        <Body>
          <InventoryDisplay />
        </Body>
      </div>
    );
  }
}

export default App;
