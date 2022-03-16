import React from "react"
import { Link } from "react-router-dom";

import { useProjects } from "../hooks/useProjects";
import { CardPortafolio } from "../components/briefcase/CardPortafolio";

import "./css/briefcase.css";

export const Briefcase = () => {
  
  const { projects } = useProjects();

  return (
    <div className="container">
      <h1>MIS TRABAJOS</h1>
      <Link to="/create-project" className="boton mb-5">Nuevo proyecto</Link>
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
