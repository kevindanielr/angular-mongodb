'use strict'

var bcrypt = require('bcrypt-nodejs');//Importando modulo para encriptar pass
var User = require('../models/user');//Importando model user

//Metodos - Acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una accion del controlador de usuarios del API Rest con Node y Mongo'
    });
}

//Metodo para registro de usuarios
function saveUser(req, res) {
    var user = new User();

    var params = req.body;//recogiendo peticion
    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_ADMIN';
    user.image = 'null';

    if (params.password) {
        //Encriptar contraseña y guardar datos
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;

            if (user.name != null && user.surname != null && user.email != null) {
                //Guardar usuario
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({message: 'Error al guardar el usuario.'});
                    } else {
                        if (!userStored) {
                            res.status(404).send({message: 'No se ha registrado el usuario.'});
                        } else {
                            res.status(200).send({user: userStored});
                        }
                    }
                });
            } else {
                res.status(200).send({message: 'Por favor rellenar todos los campos.'});
            }
        });
    }else{
        res.status(200).send({message: 'Introduce la contraseña.'});
    }
}

//Para poder usar metodos exportar
module.exports = {
    pruebas,
    saveUser
};