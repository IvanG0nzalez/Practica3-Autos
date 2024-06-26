'use strict';

var models = require('../models');
var cuenta = models.cuenta;
var empleado = models.empleado;
var rol = models.rol;

let jwt = require('jsonwebtoken');

class CuentaControl {

    async inicio_sesion(req, res) {
        if (req.body.hasOwnProperty('usuario') &&
            req.body.hasOwnProperty('clave')) {
            let cuentaAux = await cuenta.findOne({
                where:{usuario: req.body.usuario},
                include: [
                    {model: models.empleado, as: "empleado", attributes: ['apellidos', 'nombres', 'id_rol', 'external_id']},
                    //{model: models.empleado, as: "empleado", attributes: ['apellidos', 'nombres']},
                ]
            });
            if(cuentaAux === null) {
                res.status(404);
                res.json({ msg: "Error", tag: "La cuenta no existe", code: 404 });
            } else {
                if(cuentaAux.estado == true) {
                    if(cuentaAux.clave === req.body.clave) {

                        let rolAux = await rol.findOne({
                            where: {id: cuentaAux.empleado.id_rol },
                            attributes: ['nombre', 'external_id']
                        });
                        //Ver que más se le manda (persona, rol...)
                        const token_data = {
                            external: cuentaAux.external_id,
                            rol: rolAux.nombre,
                            check: true
                        };

                        require('dotenv').config();
                        const key = process.env.KEY;
                        const token = jwt.sign(token_data, key, {
                            expiresIn: '2h' //depende de que app sea
                        });
                        console.log(cuentaAux.empleado);
                        var info = {
                            token: token,
                            user: cuentaAux.empleado.nombres+' '+cuentaAux.empleado.apellidos,
                            external_id: cuentaAux.empleado.external_id,
                            rol: rolAux.nombre
                        };
                        res.status(200);
                        res.json({ msg: "OK", tag: "Logueado", code: 200, datos:info }); 
                    } else {
                        res.status(400);
                        res.json({ msg: "Error", tag: "Nice try", code: 400 }); 
                    }
                } else {
                    res.status(400);
                    res.json({ msg: "Error", tag: "Cuenta inhabilitada", code: 400 }); 
                }
            }
        } else {
            res.status(400);
            res.json({ msg: "Error", tag: "Faltan datos", code: 400 });
        }
    }
}

module.exports = CuentaControl;
