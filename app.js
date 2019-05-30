'use strict'

//Cargando librerias
var express = require('express');
var bodyParser = require('body-parser');

//Creando objeto express dentro de variable app
var app = express();

//Cargar rutas
var user_routes = require('./routes/user');

//configurando body-parser
app.use(bodyParser.urlencoded({extended:false}));//Necesario para que body-parser funcione
app.use(bodyParser.json());//Convertir objetos JSON los datos que llegan por las peticiones HTTP

//Configurar cabeceras HTTP

//Carga rutas base
app.use('/api',user_routes);

//Exportar el modulo
module.exports = app;

