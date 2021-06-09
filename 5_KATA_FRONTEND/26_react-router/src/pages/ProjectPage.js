import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import data from '../projects.json'

export const ProjectPage = () => {

  const [project, setProject] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    const nuestroProyecto = data.find((project) => project.id === parseInt(id))
    setProject(nuestroProyecto)
  }, [id])

  return (
    <div>
      <p>{id}</p>
    { project
      ? <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>{project.website}</p>
          <p>{project.website}</p>
        </>
        : <p>Cargando...</p>
      }
    </div>
  )
}
