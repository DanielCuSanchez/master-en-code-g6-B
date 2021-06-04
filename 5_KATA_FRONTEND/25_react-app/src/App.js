import "./App.css";
import { CardContainer } from "./componentes/CardContainer/CardContainer";
//import { Section } from "./componentes/Section/Section";
// import { Contador } from "./componentes/Contador/Contador";
//import { Efecto } from "./componentes/Efecto/Efecto";
import { ConsultaAPI } from "./componentes/ConsultaAPI/ConsultaAPI";

function App() {
  const titleStyles = {marginTop: '32px', color: 'red'}

  return (
    <div className="App">
      <header className="App-header">
        {/* <Section /> */}
        {/* <Contador /> */}
        {/* <Efecto /> */}
        <CardContainer>
          <h2 style={titleStyles} >Consulta a la API de rick and morty </h2>
        </CardContainer>
        <ConsultaAPI />
      </header>
    </div>
  );
}

export default App;
