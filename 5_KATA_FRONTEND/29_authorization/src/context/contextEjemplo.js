import { createContext, useContext } from "react";

//1- Crear un contexto
const ContextEjemplo = createContext();

//2- CONTEXT PROVIDER
export const UseEjemploContextProvider = ({ children }) => {
  //AUTH
  const saludo = "hola";

  const valoresDelProveedor = {
    saludo,
  };

  return (
    <ContextEjemplo.Provider value={valoresDelProveedor}>
      {children}
    </ContextEjemplo.Provider>
  );
};

export const useEjemploContext = () => {
  const context = useContext(ContextEjemplo);
  return context;
};
