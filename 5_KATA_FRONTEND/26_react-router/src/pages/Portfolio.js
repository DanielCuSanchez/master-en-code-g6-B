import React from 'react'
import { Project } from '../components/Project'
import vision from '../components/vision.png'
import info from '../projects.json'

export const Portfolio = () => {

  return (
    <div>
      <h1>Portafolio</h1>
      <p>Aquí hablaré de mi trabajo en la industria tech</p>
      <div className="container">
        <div className="row">
          {
            info.map((project)=>(
              <Project 
                key={project.id}
                id={project.id}
                title={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
