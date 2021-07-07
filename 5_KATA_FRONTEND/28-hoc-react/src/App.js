import { HigherOrderComponent } from "./Componentes/HigherOrderComponent";
import { TonyStark } from "./Componentes/TonyStark";

function App() {
  //const IroMan = HigherOrderComponent(<TonyStark />);
  //const retornandoAlgo = HigherOrderComponent(1.65656);

  return (
    <div>
      <TonyStark />

      {HigherOrderComponent(TonyStark)}
    </div>
  );
}

export default App;
