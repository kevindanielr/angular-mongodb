'use strict'

//Cargar modulo de mongoose para acceder a BDD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//Definir modelo o schema de BDD, permite un objeto de tipo schema

//Creando schema para modelo de album
var SongSchema = Schema({
    number: Number,
    name: String,
    duration: String,
    file: String,
    album: { type: Schema.ObjectId, ref: 'Album'}//relacionando un documento con otro
});

module.exports = mongoose.model('Song', SongSchema);//exportar modelo para utilizarlo afuera