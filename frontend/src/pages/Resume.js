import React from "react";
import "./css/resume.css";

export const Resume = () => {
  return (
    <div className="container">
      <h1>VERIFIQUE MI CURRÍCULUM</h1>

      <div className="resume__container">
        <div>
          <h2>Resumen</h2>
          <h4>SEBASTIAN BELTRAN</h4>
          <p>Desarrollador web FullStack</p>
          <ul>
            <li>Colombia - Ibague,Tolima.</li>
            <li>(+57) 312 436 0543</li>
            <li>sebastianbeltran341@gmail.com</li>
          </ul>
          <h2>Educacion</h2>
          <h4>INGENIERO DE SISTEMAS</h4>
          <p className="resume__fecha">2017 - 2021</p>
          <p>Universidad Cooperativa de Colombia</p>
          <p>
            Ingeniero de sistemas enfocado en el area de programacion y bases de
            datos.
          </p>
          <h4>DESARROLLO WEB</h4>
          <p className="resume__fecha">2019 - Presente</p>
          <p>Udemy-Platzi</p>
          <p>
            Cursos certificados en todo el entorno web tanto frontend y
            backend,realizando proyectos de la vida real.
          </p>
        </div>

        <div>
          <h2>Experiencia Profesional</h2>
          <h4>DESARROLLO DE PAGINAS WEB</h4>
          <p className="resume__fecha">2019 - Presente</p>
          <p>Diseño y maquetacion de pagina web.</p>
          <p>Programacion de pagina web con tecnologias como JavaScript.</p>
          <p>Diseños responsivos para moviles.</p>

          <h2>Desarrollo de aplicaciones web</h2>
          <p className="resume__fecha">2019 - Presente</p>
          <p>Crendo APIS Nodejs - Express.</p>
          <p>MySQL,MongoDb.</p>
          <p>Desarrollo con frameworks como ReactJs</p>
        </div>
      </div>
      <div className="cv">
        <h1>Desacargue mi curriculum Aqui</h1>
       <button type={"submit"} className="boton"> Desacargar</button>
      </div>
    </div>
  );
};
