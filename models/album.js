'use strict'

//Cargar modulo de mongoose para acceder a BDD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//Definir modelo o schema de BDD, permite un objeto de tipo schema

//Creando schema para modelo de album
var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: Schema.ObjectId, ref: 'Artist'}//relacionando un documento con otro
});

module.exports = mongoose.model('Album', AlbumSchema);//exportar modelo para utilizarlo afuera