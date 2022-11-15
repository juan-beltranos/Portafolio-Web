import React, { useContext } from "react"
import { Link } from "react-router-dom";

import { useProjects } from "../hooks/useProjects";
import { CardPortafolio } from "../components/briefcase/CardPortafolio";

import "./css/briefcase.css";

import { PortafolioContext } from "../context/PortafolioContext";

export const Briefcase = () => {
  const [auth, setAuth] = useContext(PortafolioContext);

  const { projects } = useProjects();

  return (
    <div className="container">
      <h1>MIS TRABAJOS</h1>
      {
        auth.auth ? (<Link to="/create-project" className="boton">Nuevo proyecto</Link>) : null
      }
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
