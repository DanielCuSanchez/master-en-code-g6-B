import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { DashboardUser } from './pages/DashboardUser';
import { Home } from './pages/Home';
import React from 'react';
import { Product } from './pages/Product';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login}  />
          <Route path="/signup" component={Signup} />

          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>

          <PrivateRoute path="/settings-account">
            <DashboardUser />
          </PrivateRoute>

          <Route path="/product/:idProduct" component={Product} />

          <Redirect to="/login"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
