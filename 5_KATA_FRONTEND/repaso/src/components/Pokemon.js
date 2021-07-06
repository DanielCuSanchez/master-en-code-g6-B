import React, { useEffect, useState } from 'react'

export const Pokemon = ({name}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(resp=>{
      return resp.json();
    })
    .then(data =>{
      setData(data)
    })
    .catch(error=>{
      console.error(error)
    })
  }, [])

  
  return (
    <div className="pokemon">
      {
        data === null ?
          <p>Cargando...</p>
        : <div>
          <h1>{data.name}</h1>
          <ul>
            <li>Tipos: {data.types.map(t=> t.type.name + ' ')}</li>
            <li>Peso: {data.weight}</li>
            <li>Altura: {data.height}</li>
          </ul>
        </div>
      }
    </div>
  )
}
