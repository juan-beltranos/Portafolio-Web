<?php

require_once __DIR__ . '/../includes/app.php';

use Controllers\proyectosController;

use MVC\Router;

$router = new Router();

// Proyectos
$router->get('/api/proyectos', [proyectosController::class,'getProyectos']);
$router->get('/api/proyectosId', [proyectosController::class,'getProyectoId']);
$router->post('/api/proyectos', [proyectosController::class,'postProyectos']);
$router->post('/api/proyectos/edit', [proyectosController::class,'putProyectos']);
$router->post('/api/proyectos/delete', [proyectosController::class,'deleteProyectos']);

// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
