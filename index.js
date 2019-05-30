'use strict'

var mongoose = require('mongoose');//Importanto libreria mongoose
var app = require('./app');//Cargando fichero app (tiene configuracion express)
var port = process.env.PORT || 3977;//Configurando puerto para la API Rest

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/curso_mean2',{useNewUrlParser:true}, (err, res) => {
    if (err) {
        throw err;
    }else{
        console.log('La conexion a la base de datos esta funcionando correctamente.');
        
        //Poniendo servidor a escuchar
        app.listen(port, function () {
            console.log('Servidor del API Rest de musica ecuchando en http://localhost:'+port);
        });
    }
});