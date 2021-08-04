import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { About } from "./components/pages/about";
import { AddItem } from "./components/pages/addItem";
import { AddInventory } from "./components/pages/addInventory";
import { AuthContext } from "./components/functions/auth-context";
import { Contact } from "./components/pages/contact";
import { Dashboard } from "./components/pages/dashboard";
import { Home } from "./components/pages/home";
import { ItemView } from "./components/pages/itemView";
import { Login } from "./components/pages/login";
import { Toolbar } from "./components/navigation/toolbar";
import { useAuth } from "./components/hooks/auth-hook";

import "./css/App.css";

interface authResponse {
  token: {
    email: string;
    name: string;
    userId: string;
    token: string;
    tokenExpiry: Date;
  };
  login: () => void;
  logout: () => void;
}

export const App: React.FC = () => {
  const { userData, login, logout } = useAuth();

  let routes = getRoutes(!!userData);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!userData.token,
        token: userData.token,
        login,
        logout,
        email: userData.email,
        image: userData.image,
        name: userData.name,
        userId: userData.userId,
      }}>
      <Router>
        <Toolbar />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
};

/** Get routes based on user login states
 * @param {string} token The user token
 * @returns A bundle of authenticated OR unauthenticated routes
 */
const getRoutes = (token: boolean): {} => {
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/inventories/:userId" exact>
          <AddInventory />
        </Route>
        <Route path="/items/:inventoryId" exact>
          <AddItem />
        </Route>
        <Route path="/item/:itemId" exact>
          <ItemView />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  return routes;
};
