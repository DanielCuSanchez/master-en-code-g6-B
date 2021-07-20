import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/userContext'
import './NavBar.css'

export const NavBar = () => {

  const {setIsLogged, isLogged, cart} = useUserContext();

  const logout = () => { 
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Mi súper tiendita</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home" >Productos</Link>
            </li>
            <li className="nav-item">
              {
                isLogged 
                ? <span className="nav-link active logout" aria-current="page" onClick={logout} >Cerrar sesión</span>
                : <Link className="nav-link active" to="/login">Login</Link>
              }
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Carrito
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {
                cart.length ?
                cart.map((product, key)=>(
                  <p key={key}>{product.product_name} ({product.quantity || 1})  - ${product.price}MXN</p>
                ))
                :<p>Carrito vacío</p>}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
