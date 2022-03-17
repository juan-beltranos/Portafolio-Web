import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { projectApi } from "../../api/portafolioApi";

export const EditProject = () => {
  
  let navigate = useNavigate();
  let params = useParams();

  const [ project, setProject ] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    tecnologias: "",
    url: "",
    fecha: "",
  });

  // Consultar el proyecto para llenar campos del formulario
  useEffect(() => {
    const consultApi = async () => {
      const projectGet = await projectApi.get(`/proyectosId?id=${params.id}`);
      setProject(projectGet.data);
    };
    consultApi();
  }, []);

  const [archivo, setArchivo] = useState("");

  // Almacenar proyecto en la BD
  const editProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", project.nombre);
    formData.append("imagen", archivo);
    formData.append("descripcion", project.descripcion);
    formData.append("tecnologias", project.tecnologias);
    formData.append("url", project.url);
    formData.append("fecha", project.fecha);

    //Almacenar en BD
    try {
      const res = await projectApi.post(`/proyectos/edit?id=${params.id}`,formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Lanzar alerta coorecto
      toast(res.data.mensaje);

      setTimeout(() => {
        // Redireccionar
        navigate("/briefcase");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // Leer los datos del formulario
  const projectInfo = (e) => {
    setProject({
      // Obtener copia del state
      ...project,
      [e.target.name]: e.target.value,
    });
    // console.log(project);
  };

  // Coloca imagen en el state
  const projectImage = (e) => {
    setArchivo(e.target.files[0]);
  };

  return (
    <div className="contacto">
      <form className="formulario" onSubmit={editProject}>
        <legend>Editar Proyecto</legend>

        <div className="contenedor-campos">
          <div className="campo">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={project.nombre}
              onChange={projectInfo}
              required
            />
          </div>

          <div className="campo">
            <label>Imagen</label>
             
            <input type="file" name="imagen"  onChange={projectImage} />
          </div>

          <div className="campo w-100">
            <label>Descripcion </label>
            <textarea
              placeholder="Descripcion del proyecto"
              name="descripcion"
              value={project.descripcion}
              onChange={projectInfo}
            />
          </div>

          <div className="campo w-100">
            <label>Tecnologias </label>
            <input
              type="text"
              name="tecnologias"
              placeholder="Tecnologias usadas"
              value={project.tecnologias}
              onChange={projectInfo}
              required
            />
          </div>

          <div className="campo w-100">
            <label>Url </label>
            <input
              type="url"
              name="url"
              placeholder="Url del proyecto"
              value={project.url}
              onChange={projectInfo}
              required
            />
          </div>

          <div className="campo w-100">
            <label>Fecha Creacion </label>
            <input type="date" name="fecha"  onChange={projectInfo} required />
          </div>
        </div>

        <div className="enviar">
          <input className="boton" type="submit" value="Editar Proyecto" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
