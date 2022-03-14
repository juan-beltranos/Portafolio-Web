import React from 'react'
import { Link } from "react-router-dom";

import './css/home.css'

export const Home = () => {
  return (
    <>

      <div className="hero">
        <div className="contenido-hero">
          <h1>Desarrollador Web FullStack</h1>
          <p><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
          </svg>Ibague, Tolima - Colombia</p>

          <Link className="boton" to="/contact">Contactar</Link>
        </div>
      </div>
    </>

  )
}
