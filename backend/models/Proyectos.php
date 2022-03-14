<?php

namespace Model;

class Proyectos extends ActiveRecord
{
    // BD
    protected static $tabla = 'proyectos';
    protected static $columnasDB = ['id', 'nombre', 'imagen', 'descripcion', 'url', 'fecha'];

    public $id;
    public $nombre;
    public $imagen;
    public $descripcion;
    public $url;
    public $fecha;

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? '';
        $this->imagen = $args['imagen'] ?? '';
        $this->descripcion = $args['descripcion'] ?? '';
        $this->url = $args['url'] ?? '';
        $this->fecha = $args['fecha'] ?? '';
    }

}
