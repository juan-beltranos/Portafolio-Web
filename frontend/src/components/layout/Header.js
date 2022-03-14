import { Link } from "react-router-dom";
import './header.css'

export const Header = () => {
  return (
    <>
      <header className="header">
        <h3>Juan Sebastian Beltran Ospina</h3>
      </header>
      <nav className="header__nav">
        <Link to="/" >Inicio</Link>
        <Link to="/about">Acerca de mi</Link>
        <Link to="/resume">Resumen</Link>
        <Link to="/briefcase">Portafolio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/login">Iniciar Sesion</Link>

      </nav>

    </>
  );
}
