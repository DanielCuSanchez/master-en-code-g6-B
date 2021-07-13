import React from 'react'
import { Link } from 'react-router-dom'
import './Outside.css'

export const Signup = () => {
  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Registrate en<br /> Mi tienda</h2>
        </div>
        <Link to="/login" className="btn btn-secondary">Iniciar sesión</Link>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="User Name" />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input type="text" className="form-control" placeholder="User Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="User Name" />
              </div>
              <div className="form-group">
                <label>Fecha de nacimiento</label>
                <input type="date" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group">
                <label>Género</label>
                <select type="select" className="form-select form-control">
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-black">Registrarme</button> </form>
          </div>
        </div>
      </div>
    </>
  )
}
