import { createContext, useCallback, useContext, useEffect, useState } from "react";

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
  const [cart, setCart] = useState(()=>{
    let savedCart = JSON.parse(localStorage.getItem('cart'))
    return savedCart ? savedCart : [];
  })

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

  const addToCart = useCallback((product) => {
    let newCart = [...cart]

    let productExist = newCart.find(prod=> prod._id === product._id)
    if (productExist){
      productExist.quantity ? productExist.quantity++ : productExist.quantity = 2;
    }else{
      newCart.push(product)
    }

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }, [cart, setCart])

  const removeFromCart = useCallback((productId) => {
    let newCart = [...cart]
    let index = newCart.findIndex(prod=> prod._id === productId)
    if(index){
      let product = newCart[index]
      if(product.quantity && product.quantity > 1){
        product.quantity--
      }else{
        newCart.splice(index, 1)
      }
    }
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }, [cart, setCart])

  const values = { isLogged, setIsLogged, user, cart, addToCart, removeFromCart };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
