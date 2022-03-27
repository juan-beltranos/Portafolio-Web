import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { projectApi } from "../../api/portafolioApi";
// Context
import { PortafolioContext } from "../../context/PortafolioContext";

import "../briefcase/CardPortafolio.css";
import "react-toastify/dist/ReactToastify.css";

export const CardPortafolio = ({ project }) => {
  const [auth] = useContext(PortafolioContext);

  const deleteProject = async (id) => {
    const res = await projectApi.post(`/proyectos/delete?id=${id}`);
    toast(res.data.mensaje);
  };

  return (
    <div className="card">
      <img
        src={"data:image/jpg;base64," + project.imagen}
        alt={project.nombre}
        className="about__img"
      />
      <h3>{project.nombre}</h3>
      <div className="card_body">
        <small>Fecha: {project.fecha}</small>
        <p>Descripcion: {project.descripcion}</p>
        <p>Tecnologias:{project.tecnologias}</p>
        <p>Url: {project.url}</p>
      </div>
      {auth.auth ? (
        <div className="container-buttons">
          <Link to={`/edit-project/${project.id}`} className="btn-editar">
            Editar
          </Link>
          <button
            className="btn-eliminar"
            onClick={() => deleteProject(project.id)}
          >
            Eliminar
          </button>
        </div>
      ) : null}

      <ToastContainer />
    </div>
  );
};
