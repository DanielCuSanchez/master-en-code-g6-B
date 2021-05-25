import "./App.css";
import { Card } from "./componentes/Card/Card";

function App() {
  return (
    <div className="App">
      <Card />
      <header className="App-header">
        <img src="" className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hola mundo desde react</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
