import React from 'react'
import './css/contacto.css'

export const Contact = () => {
  return (
    <>
        <div id="contacto" className="contacto">
            <form className="formulario" action="#" method="POST">
                <legend>Contactame</legend>

                <div className="contenedor-campos">
                    <div className="campo">
                        <label>Nombre</label>

                        <input type="text" name="nombre" placeholder="Nombre" required />
                    </div>
                    <div className="campo">
                        <label>Teléfono</label>

                        <input type="tel" name="telefono" placeholder="Teléfono" />
                    </div>
                    <div className="campo w-100">
                        <label>Correo</label>

                        <input type="mail" name="correo" placeholder="Mail" />
                    </div>
                    <div className="campo w-100">
                        <label>Mensaje</label>

                        <textarea placeholder='Escribe tu mensaje'></textarea>
                    </div>
                </div>
                <div className="enviar">
                    <input className="boton" type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    </>
  )
}
