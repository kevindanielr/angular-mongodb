'use strict'

//Cargar modulo de mongoose para acceder a BDD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//Definir modelo o schema de BDD, permite un objeto de tipo schema

//Creando schema para modelo de artist
var ArtistSchema = Schema({
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Artist', ArtistSchema);//exportar modelo para utilizarlo afuera