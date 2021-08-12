import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const About = React.lazy(() => import("./components/pages/about"));
const AddItem = React.lazy(() => import("./components/pages/add-item"));
const AddInventory = React.lazy(
  () => import("./components/pages/add-inventory")
);
const Contact = React.lazy(() => import("./components/pages/contact"));
const Dashboard = React.lazy(() => import("./components/pages/dashboard"));
const Home = React.lazy(() => import("./components/pages/home"));
const ItemView = React.lazy(() => import("./components/pages/item-view"));

const Login = React.lazy(() => import("./components/pages/login"));
const Toolbar = React.lazy(() => import("./components/navigation/toolbar"));
import { AuthContext } from "./components/functions/auth-context";
import { useAuth } from "./components/hooks/auth-hook";
import LoadingSpinner from "./components/elements/loading-spinner";

import "./css/app.css";

const App: React.FC = () => {
  const { userData, login, logout } = useAuth();

  let routes = getRoutes(!!userData.token);

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
        <Suspense fallback={<LoadingSpinner asOverlay />}>
          <Toolbar />
          {routes}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
};

/** Get routes based on user login states
 * @param {string} token The user token
 * @returns A bundle of authenticated OR unauthenticated routes
 */
const getRoutes = (token: boolean): {} => {
  if (token) {
    return (
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
  } else
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
};

export default App;
