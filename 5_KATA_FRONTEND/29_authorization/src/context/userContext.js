import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { getProfile } from "../services/user.service";

//1- Crear un contexto
const UserContext = createContext();

//2- CONTEXT PROVIDER
export const UserContextProvider = ({ children }) => {
  //AUTH
  const [user, setUser] = useState({});

  //AUTH
  const getTokenLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  //AUTH
  const [token] = useState(getTokenLocalStorage());
  //AUTH
  const [isLogged, setIsLogged] = useState(false);

  //AUTH
  useEffect(() => {
    if (token) {
      getProfile()
        .then(({ user }) => {
          if (user) {
            setUser(user);
            console.log(user);
            setIsLogged(true);
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLogged(false);
        });
    }
  }, [isLogged, token]);

  //CARRITO
  const [cartObject, setCartObject] = useState({ cart: [], user_id: "" });

  //CARRITO
  useEffect(() => {
    let savedCart = JSON.parse(localStorage.getItem("cart"));
    console.log(savedCart);
    if (savedCart && savedCart.user_id === user._id) {
      console.log("Entre");
      setCartObject(savedCart);
    } else {
      setCartObject({ cart: [], user_id: "" });
    }
  }, [token, user]);
  //CARRITO
  const addToCart = useCallback(
    (product) => {
      let newCart = [...cartObject.cart];
      let newCartObject = { cart: newCart, user_id: user._id };

      let productExist = newCart.findIndex((prod) => prod._id === product._id);
      if (productExist >= 0) {
        let quantity = newCart[productExist].quantity;
        quantity >= 0
          ? (newCart[productExist].quantity = quantity + 1)
          : (newCart[productExist] = { ...productExist, quantity: 2 });
      } else {
        newCart.push({ ...product, quantity: 1 });
      }

      setCartObject(newCartObject);
      localStorage.setItem("cart", JSON.stringify(newCartObject));
    },
    [cartObject, setCartObject, user._id]
  );
  //CARRITO
  const removeFromCart = useCallback(
    (productId) => {
      let newCart = [...cartObject];
      let index = newCart.findIndex((prod) => prod._id === productId);
      if (index) {
        let quantity = newCart[index].quantity;
        if (quantity && quantity > 1) {
          newCart[index] = { ...newCart[index], quantity: quantity - 1 };
        } else {
          newCart.splice(index, 1);
        }
      }
      setCartObject(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cartObject, setCartObject]
  );

  const valoresDelProveedor = {
    //variables de la autenticacion
    isLogged,
    setIsLogged,
    user,
    //Variables del carrito
    cartObject,
    addToCart,
    removeFromCart,
  };

  return (
    <UserContext.Provider value={valoresDelProveedor}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
