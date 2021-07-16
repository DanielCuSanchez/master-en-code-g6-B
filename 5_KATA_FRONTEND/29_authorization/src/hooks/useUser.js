import { useEffect, useState } from "react";
import { getProfile } from "../services/user.service";

export const useUser = () => {
  // Aquí vendría la lógica de la autenticacion

  //Estado del usuario
  const [user, setUser] = useState(null);

  //Bandera que hace dictamen si estoy logueado o no
  const buscarEnLocalStorage = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const [isLogged, setIsLogged] = useState(buscarEnLocalStorage());

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
    if (token) {
      getProfile()
        .then(({ user }) => {
          if (user) {
            setUser(user);
            //console.log(user);
          } else {
            setIsLogged(false);
          }
        })
        .catch((error) => {
          //console.error(error);
          setIsLogged(false);
        });
    }
  }, []);

  return [isLogged, setIsLogged, user];
};
