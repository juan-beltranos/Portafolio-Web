<?php

namespace Controllers;

use Model\Usuarios;
use MVC\Router;

class usuariosController
{

    public static function login(Router $router)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $usuario = new Usuarios($_POST);

            // Verificar quel el usuario exista
            $usuario = Usuarios::where('correo', $usuario->correo);

            if (!$usuario || !$usuario->correo || !$usuario->contraseña) {
                $respuesta = [
                    'tipo' => 'error',
                    'mensaje' => 'Usuario o contraseña incorrectos'
                ];
                echo json_encode($respuesta);
                return;
            } else {
               // El Usuario existe

                $_SESSION['id'] = $usuario->id;
                $_SESSION['correo'] = $usuario->correo;
                $_SESSION['login'] = true;

                // Redireccionar
                $respuesta = [
                    'id' =>  $_SESSION['id'] = $usuario->id,
                    'tipo' => 'exito',
                    'login' =>   $_SESSION['login'] = true,
                    'mensaje' => 'Login exitoso',
                    'correo' =>    $_SESSION['correo'] = $usuario->correo
                ];
                echo json_encode($respuesta);
            }
        }
    }

    public static function logout()
    {
        session_destroy();
        $_SESSION = [];
        $respuesta = [
            'tipo' => 'exito',
            'mensaje' => 'Cierre de sesion exitoso'
        ];
        http_response_code(200);
        echo json_encode($respuesta);
        return;
    }
}
