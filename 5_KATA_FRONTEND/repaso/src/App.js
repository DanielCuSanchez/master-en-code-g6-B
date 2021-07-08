import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Edit } from './pages/Edit';
import { Admin } from './pages/Admin';
import { Posts } from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute path="/posts">
            <Posts/>
          </PrivateRoute>
          {/* <PrivateRoute path="/edit" component={Edit} />
          <PrivateRoute path="/admin" component={Admin} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
