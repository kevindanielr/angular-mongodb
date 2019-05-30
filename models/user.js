'use strict'

//Cargar modulo de mongoose para acceder a BDD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//Definir modelo o schema de BDD, permite un objeto de tipo schema

//Creando schema para modelo de user
var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);//exportar modelo para utilizarlo afuera