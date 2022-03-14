import React from "react";

export const Services = () => {
  return (
    <div id="contacto" className="contacto">
      <form className="formulario" action="#" method="POST">
        <legend>Iniciar Sesion</legend>

        <div className="contenedor-campos">
          <div className="campo w-100">
            <label>Email</label>

            <input type="mail" name="correo" placeholder="Mail" />
          </div>
          <div className="campo w-100">
            <label>Password</label>

            <input type="password" name="password" placeholder="Contraseña" />

          </div>
        </div>
        <div className="enviar">
          <input className="boton" type="submit" value="Ingresar" />
        </div>
      </form>
    </div>
  );
};
