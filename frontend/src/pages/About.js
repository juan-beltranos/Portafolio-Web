import React from "react";
import { Link } from 'react-router-dom';

import hero from "../img/hero.jpg";
import "./css/about.css";

export const About = () => {
  return (
    <div className="container">
      <h1>MÁS INFORMACIÓN SOBRE MÍ</h1>
      <div className="about__container">
        <div className="about__item">
          <img src={hero} alt="img-profile" className="about__img" />
        </div>
        <div className="about__item">
          <h2>Desarrollador Web FullStack</h2>
          <div className="about__item__info">
            <ul>
              <li><strong>Sitio Web:</strong>  www.sitewebcode.com</li>
              <li><strong>Telefono:</strong> +57 312 436 0543</li>
              <li><strong>Ciudad:</strong> Ibague,Tolima - Colombia</li>
            </ul>
            <ul>
              <li><strong>Github:</strong><a href="https://github.com/juan-beltranos" target="_blank">  juan-beltranos</a></li>
              <li><strong>Email:</strong> sebastianbeltran341@gmail.com</li>
              <li><strong>Edad:</strong> 23</li>
            </ul>
          </div>
          <p>Soy ingeniero de software, analista programador de sistemas de computo, con un poco más de 2 años en el mundo del desarrollo de aplicaciones frontend y backend.
          Durante mi último año me he dedicado al desarrollo freelance,  mientras tambien trabajo en una empresa de mi pais.
          Me encanta programar y aprender las nuevas tecnologias del mundo del desarrollo, son mis pasatiempos favoritos que a su vez, es mi trabajo.</p>
        </div>
      
      </div>
      <div className="about__item_habilidades">
          <h1>Habilidades</h1>
          <div className="about__item__info_habilidaes">
            <h3>Frontend</h3>
            <ul>
              <li><strong>HTML</strong> </li>
              <li><strong>CSS</strong> </li>
              <li><strong>JAVASCRIPT</strong></li>
              <li><strong>REACTJS</strong></li>
              <li><strong>SASS</strong></li>
              <li><strong>BOOTSTRAP</strong></li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li><strong>NODEJS</strong></li>
              <li><strong>EXPRESS</strong></li>
              <li><strong>PHP</strong></li>
              <li><strong>FIREBASE</strong></li>
              <li><strong>MONGODB</strong></li>
              <li><strong>MYSQL</strong></li>
            </ul>
          </div>
   
        </div>
    </div>
  );
};
