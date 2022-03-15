import React from "react";
import { ToastContainer, toast } from 'react-toastify';

import { projectApi } from "../../api/portafolioApi";
import hero from '../../img/hero.jpg'

import '../briefcase/CardPortafolio.css';
import 'react-toastify/dist/ReactToastify.css';


export const CardPortafolio = ({ project }) => {

  const deleteProject = async (id) => {
    const res = await  projectApi.post(`/proyectos/delete?id=${id}`)
    toast(res.data.mensaje);
  }

  return (
    <div className="card">
      <img src={hero} alt={project.nombre} className="about__img" />
      <h3>{project.nombre}</h3>
      <div className="card_body">
        <small>Fecha: {project.fecha}</small>
        <p>Descripcion: {project.descripcion}</p>
        <p>Tecnologias:{project.tecnologias}</p>
        <p>Url: {project.url}</p>
      </div>
      <div className="container-buttons">
        <button className="btn-editar">Editar</button>
        <button className="btn-eliminar" onClick={() => deleteProject(project.id)}>Eliminar</button>
      </div>
      <ToastContainer />
    </div>
  );

};
