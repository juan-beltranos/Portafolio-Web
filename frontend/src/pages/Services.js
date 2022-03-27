import React, { useState, useContext } from "react";
import { projectApi } from "../api/portafolioApi";

// comtext
import { PortafolioContext } from "../context/PortafolioContext";

export const Services = () => {
  
  const [auth, setAuth] = useContext(PortafolioContext);

  const [login, setLogin] = useState({
    correo: "",
    contraseña: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("correo", login.correo);
    formData.append("contraseña", login.contraseña);

    try {
      await projectApi.post("/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem('auth', true)

      if (localStorage.getItem("auth", true)) {
        setAuth({
          auth: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Leer los datos del formulario
  const loginInfo = (e) => {
    setLogin({
      // Obtener copia del state
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contacto" className="contacto">
      <form className="formulario" onSubmit={loginUser}>
        <legend>Iniciar Sesion</legend>

        <div className="contenedor-campos">
          <div className="campo w-100">
            <label>Email</label>

            <input
              type="mail"
              name="correo"
              onChange={loginInfo}
              placeholder="Mail"
            />
          </div>
          <div className="campo w-100">
            <label>Password</label>

            <input
              type="password"
              name="contraseña"
              onChange={loginInfo}
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="enviar">
          <input className="boton" type="submit" value="Ingresar" />
        </div>
      </form>
    </div>
  );
};
