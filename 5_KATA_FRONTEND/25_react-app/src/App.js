import "./App.css";

//import { Section } from "./componentes/Section/Section";
// import { Contador } from "./componentes/Contador/Contador";
import { Efecto } from "./componentes/Efecto/Efecto";
import { ConsultaAPI } from "./componentes/ConsultaAPI/ConsultaAPI";
import { Inicio } from "./paginas/Inicio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Section /> */}
        {/* <Contador /> */}
        {/* <Efecto /> */}
        <Inicio>
          <ConsultaAPI />
        </Inicio>

        {/* <Inicio>
          <Efecto />
        </Inicio> */}
      </header>
    </div>
  );
}

export default App;
