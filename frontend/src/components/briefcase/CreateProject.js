import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { projectApi } from "../../api/portafolioApi";

export const CreateProject = () => {

  let navigate = useNavigate();

  const [ project, setProject ] = useState({
    nombre: "",
    descripcion: "",
    tecnologias: "",
    url: "",
    fecha: "",
  });

  const [archivo, setArchivo] = useState("");

  // Almacenar proyecto en la BD
  const addProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", project.nombre);
    formData.append("imagen", archivo);
    formData.append("descripcion", project.descripcion);
    formData.append("tecnologias", project.tecnologias);
    formData.append("url", project.url);
    formData.append("fecha", project.fecha);

    console.log(archivo);

    //Almacenar en BD
    try {
      const res = await projectApi.post("/proyectos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Lanzar alerta coorecto
      toast(res.data.msg);

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
      <form className="formulario" onSubmit={addProject}>
        <legend>Crear Proyecto</legend>

        <div className="contenedor-campos">
          <div className="campo">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={projectInfo}
              required
            />
          </div>

          <div className="campo">
            <label>Imagen</label>
            <input type="file" name="imagen" onChange={projectImage} />
          </div>

          <div className="campo w-100">
            <label>Descripcion </label>
            <textarea
              placeholder="Descripcion del proyecto"
              name="descripcion"
              onChange={projectInfo}
            />
          </div>

          <div className="campo w-100">
            <label>Tecnologias </label>
            <input
              type="text"
              name="tecnologias"
              placeholder="Tecnologias usadas"
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
              onChange={projectInfo}
              required
            />
          </div>

          <div className="campo w-100">
            <label>Fecha Creacion </label>
            <input type="date" name="fecha" onChange={projectInfo} required />
          </div>
        </div>

        <div className="enviar">
          <input className="boton" type="submit" value="Crear Proyecto" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
