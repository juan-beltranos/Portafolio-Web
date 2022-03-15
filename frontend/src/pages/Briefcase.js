import React from "react";

import { useProjects } from "../hooks/useProjects";
import { CardPortafolio } from "../components/briefcase/CardPortafolio";

import "./css/briefcase.css";

export const Briefcase = () => {
  
  const { projects } = useProjects();

  return (
    <div className="container">
      <h1>MIS TRABAJOS</h1>
      <button className="boton ">Nuevo proyecto</button>
      <div className="briefcase__grid">
        {
          projects.map((project) => (
            <CardPortafolio 
              key={project.id} 
              project={project} 
            />
          ))
        }
      </div>
    </div>
  );
};
