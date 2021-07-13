import { useEffect, useState } from "react";
import { getProfile } from "../services/user.service";

export const useUser = () => {
  // Aquí vendría la lógica de la autenticacion
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(()=>{
    const token = localStorage.getItem('token')
    return !!token
  })
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLogged(!!token)

    getProfile()
      .then(({user})=> {
        if(user){
          setUser(user)
          console.log(user)
        }else{
          setIsLogged(false)
        }
      }).catch(error=>{
        console.error(error)
        setIsLogged(false)
      })
  }, [])

  return [isLogged, setIsLogged, user];
}