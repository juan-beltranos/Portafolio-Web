<?php

namespace Model;

class Usuarios extends ActiveRecord
{
    // BD
    protected static $tabla = 'usuarios';
    protected static $columnasDB = ['id', 'correo', 'contraseña'];

    public $id;
    public $correo;
    public $contraseña;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->correo = $args['correo'] ?? '';
        $this->contraseña = $args['contraseña'] ?? '';
    }

    public function validarLogin()
    {
    
        if (!filter_var($this->correo, FILTER_VALIDATE_EMAIL)) {
            $respuesta = [
                'tipo' => 'error',
                'mensaje' => 'El email no es valido'
            ];
             json_encode($respuesta);
        }
        if (!$this->contraseña) {
            $respuesta = [
                'tipo' => 'error',
                'mensaje' => 'La contraseña es obligatoria'
            ];
             json_encode($respuesta);
        }

        return;
        exit;
    }

}
