<?php

namespace Controllers;

use Model\Proyectos;
use MVC\Router;

class proyectosController
{

    public static function getProyectos(Router $router)
    {
        $proyectos = Proyectos::all();
        echo json_encode(["data" => $proyectos]);
    }

    public static function getProyectoId(Router $router){

        $proyecto = Proyectos::where('id', $_GET['id']);

        // Validar si existe el id del proyecto
        if (!$proyecto) {
            $respuesta = [
                'tipo' => 'error',
                'mensaje' => 'No existe ese proyecto'
            ];
            echo json_encode($respuesta);
            return;
        }

        echo json_encode($proyecto);
    }

    public static function postProyectos(Router $router)
    {

        $proyecto = new Proyectos;

        if ($_SERVER['REQUEST_METHOD'] === "POST") {

            $proyecto->sincronizar($_POST);

            if (!$proyecto->nombre || !$proyecto->imagen || !$proyecto->descripcion || !$proyecto->url  || !$proyecto->fecha) {
                $res = [
                    'tipo' => 'error',
                    'msg' => 'Ningun campo puede ir vacio'
                ];
                echo json_encode($res);
                return;
            }

            $proyecto->guardar();

            $respuesta = [
                'tipo' => 'exito',
                'mensaje' => 'Proyecto Creado Correctamente',
            ];
            echo json_encode($respuesta);
        }
    }

    public static function putProyectos(Router $router)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Validar que el servicio exista
            $proyecto = Proyectos::where('id', $_GET['id']);

            if (!$proyecto) {
                $respuesta = [
                    'tipo' => 'error',
                    'mensaje' => 'Ese proyecto no existe'
                ];
                echo json_encode($respuesta);
                return;
            }

            $proyectoPut = new Proyectos($_POST);
            $proyectoPut->id = $proyecto->id;
            $resultado = $proyectoPut->actualizar();

            if ($resultado) {
                $respuesta = [
                    'tipo' => 'exito',
                    'id' => $proyectoPut->id,
                    'mensaje' => 'Actualizado correctamente'
                ];
                echo json_encode(['respuesta' => $respuesta]);
            }
        }
    }

    public static function deleteProyectos(Router $router)
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Validar que el servicio exista
            $proyecto = Proyectos::where('id', $_GET['id']);

            if (!$proyecto) {
                $respuesta = [
                    'tipo' => 'error',
                    'mensaje' => 'Ese proyecto no existe'
                ];
                echo json_encode($respuesta);
                return;
            }

            $proyectoDelete = new Proyectos($_POST);
            $proyectoDelete->id = $proyecto->id;

            $proyecto = $proyectoDelete->eliminar();

            
            $resultado = [
                'mensaje' => 'Eliminado Correctamente',
                'tipo' => 'exito'
            ];

            echo json_encode($resultado);
        }
    }

}
