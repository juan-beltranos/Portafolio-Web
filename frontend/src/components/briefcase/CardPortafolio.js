import React from "react";
import hero from "../../img/hero.jpg";

export const CardPortafolio = () => {
  return (
    <div className="card">
      <img src={hero} alt="img-profile" className="about__img" />
      <h3>Aplicacion web</h3>
      <div className="card_body">
        <small>Fecha: 14/03/2022</small>
        <p>Descripcion: Aplicacion de portafolio</p>
        <p>Tecnologias: html css js</p>
        <p>Url: http://localhost:3000/briefcase</p>
      </div>
    </div>
  );
};
