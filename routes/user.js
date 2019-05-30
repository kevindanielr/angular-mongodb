'use strict'

//Estancia express
var express = require('express');
//Cargar UserController
var UserController =  require('../controlers/user');
//Cargar router express
var api = express.Router();

api.get('/probando-controlador',UserController.pruebas);//Creando rutas
api.post('/register',UserController.saveUser);
module.exports = api;//Exportar api para usar en todo el backend
