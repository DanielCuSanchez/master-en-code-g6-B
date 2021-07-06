import React, { useState, useEffect } from 'react'

export const GuardaFrase = ({clave}) => {
  // const [frase, setFrase] = useState(()=>{
  //   return localStorage.getItem(clave) || ''
  // })
  const [frase, setFrase] = useState('')
  useEffect(() => {
    // let fraseGuardada = localStorage.getItem(clave) === null ? '' : localStorage.getItem(clave)
    let fraseGuardada = localStorage.getItem(clave) || ''
    setFrase(fraseGuardada)
  }, [clave])

  const inputHandler = (ev)=>{
    let value = ev.target.value
    setFrase(value)
    localStorage.setItem(clave, value)
  }

  return (
    <div className="guarda-frase">
      <label>Guarda una frase aquí:</label>
      <textarea onChange={inputHandler} value={frase} name="frase"/>
    </div>
  )
}
