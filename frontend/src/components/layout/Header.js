import { useContext } from "react";
import { Link } from "react-router-dom";

import { projectApi } from "../../api/portafolioApi";
import { PortafolioContext } from "../../context/PortafolioContext";

import "./header.css";

export const Header = () => {
  const [auth, setAuth] = useContext(PortafolioContext);

  const logout = async (e) => {
    e.preventDefault();
    const res = await projectApi.post("/logout");
    console.log(res.data);
    setAuth({
      auth: false,
    });
  };

  return (
    <>
      <header className="header">
        <h3>Juan Sebastian Beltran Ospina</h3>
      </header>
      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de mi</Link>
        <Link to="/resume">Resumen</Link>
        <Link to="/briefcase">Portafolio</Link>
        <Link to="/contact">Contacto</Link>
        {auth.auth ? (
          <button className="btn-eliminar" onClick={logout}>
            Cerrar Sesion
          </button>
        ) : (
          <Link to="/login">Iniciar Sesion</Link>
        )}
      </nav>
    </>
  );
};
