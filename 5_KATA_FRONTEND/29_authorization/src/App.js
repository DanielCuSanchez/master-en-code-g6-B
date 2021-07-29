import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { DashboardUser } from "./pages/DashboardUser";
import { Home } from "./pages/Home";
import React from "react";
import { Product } from "./pages/Product";
import { useUserContext } from "./context/userContext";
import { NavBar } from "./components/NavBar/index";

import "./pages/Outside.css";
import "./pages/Inside.css";
import { Cart } from "./pages/Cart";
import { AddProduct } from "./pages/AddProduct";

function App() {
  const { isLogged } = useUserContext();
  return (
    <div className="App">
      <Router>
        {/* Renderiza NavBar si solo esta loggeado */}
        {isLogged && <NavBar />}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>

          <PrivateRoute path="/settings-account">
            <DashboardUser />
          </PrivateRoute>

          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute>

          <PrivateRoute path="/add-product">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute>
            <Route path="/product/:idProduct" component={Product} />
          </PrivateRoute>

          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
