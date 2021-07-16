import { createContext, useContext, useEffect, useState } from "react";

import { getProfile } from "../services/user.service";

//Crear un contexto
export const UserContext = createContext();

// arranque del contexto
export const UserContextProvider = ({ children }) => {
  // Aquí vendría la lógica de la autenticacion

  //Estado del usuario
  const [user, setUser] = useState({});

  //Bandera que hace dictamen si estoy logueado o no
  const getTokenLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const [token] = useState(getTokenLocalStorage());
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (token) {
      getProfile()
        .then(({ user }) => {
          if (user) {
            setUser(user);
            setIsLogged(true);
            console.log(user);
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLogged(false);
        });
    }
    console.log("USE_EFFECT_TOKEN");
  }, [token]);

  const values = { isLogged, setIsLogged, user };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
