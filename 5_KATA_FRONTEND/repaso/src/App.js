import './App.css';
import { GuardaFrase } from './components/GuardaFrase';

function App() {
  return (
    <div className="App">
      {/* <Pokemon name="pikachu"/> */}
      <GuardaFrase clave="frase" />
      <GuardaFrase clave="frase3" />
    </div>
  );
}

export default App;
