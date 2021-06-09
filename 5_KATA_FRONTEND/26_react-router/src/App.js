import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { NavBar } from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ProjectPage } from './pages/ProjectPage';

function App() {

  return (
    <Router>
      <div className="App">
       
        <NavBar/>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/project/:id">
            <ProjectPage/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
