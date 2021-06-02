import "./App.css";
//import { Section } from "./componentes/Section/Section";
// import { Contador } from "./componentes/Contador/Contador";
//import { Efecto } from "./componentes/Efecto/Efecto";
import { ConsultaAPI } from "./componentes/ConsultaAPI/ConsultaAPI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Section /> */}
        {/* <Contador /> */}
        {/* <Efecto /> */}
        <ConsultaAPI />
      </header>
    </div>
  );
}

export default App;
