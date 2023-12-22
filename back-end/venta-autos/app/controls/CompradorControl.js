'use strict';

var models = require('../models');
var comprador = models.comprador;

class CompradorControl {
    async listar(req, res) {
        var lista = await comprador.findAll({
            include: [
                { model: models.venta, as: "venta", attributes: ['numero', 'total', 'external_id'] },
            ],
            attributes: ['nombres', 'apellidos', ['external_id', 'id'], 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac']
        });
        if (lista === undefined || lista === null) {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: {} });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }
    }

    async obtener(req, res) {
        const external = req.params.external;
        var lista = await comprador.findOne({
            where: { external_id: external },
            include: [
                { model: models.venta, as: "venta", attributes: ['numero', 'total', 'external_id'] },
            ],
            attributes: ['nombres', 'apellidos', 'external_id', 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac']
        });
        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Comprador no encontrado", code: 404 });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }

    }

    async guardar(req, res) {
        if (req.body.hasOwnProperty('nombres') &&
            req.body.hasOwnProperty('apellidos') &&
            req.body.hasOwnProperty('cedula') &&
            req.body.hasOwnProperty('direccion') &&
            req.body.hasOwnProperty('celular') &&
            req.body.hasOwnProperty('genero') &&
            req.body.hasOwnProperty('fecha_nac')) {
            var uuid = require('uuid');

            var data = {
                apellidos: req.body.apellidos,
                nombres: req.body.nombres,
                cedula: req.body.cedula,
                direccion: req.body.direccion,
                celular: req.body.celular,
                genero: req.body.genero,
                fecha_nac: req.body.fecha_nac,
                external_id: uuid.v4()
            }

            var result = await comprador.create(data);

            if (result === null) {
                res.status(401);
                res.json({ msg: "Error", tag: "No se guardó el comprador", code: 401 });
            } else {
                res.status(200);
                res.json({ msg: "OK", code: 200 });
            }
        } else {
            res.status(400);
            res.json({ msg: "Error", tag: "Faltan datos", code: 400 });
        }
    }

    async modificar(req, res) {
        const external = req.params.external;
        const {
            nombres,
            apellidos,
            direccion,
            celular,
            genero,
        } = req.body;
        var uuid = require('uuid');

        if (genero !== "Masculino" && genero !== "Femenino" && genero !== "Otro") {
            res.status(400);
            res.json({ msg: "Error", tag: "El genero ingresado no es válido, usar 'Masculino', 'Femenino' u 'Otro'", code: 400 });
            return;
        }

        const compradorAux = await comprador.findOne({ where: { external_id: external } });

        if (compradorAux === null || compradorAux === undefined) {
            res.status(404);
            res.json({ msg: "Error", tag: "Comprador no encontrado", code: 404 });
            return;
        }

        compradorAux.nombres = nombres || compradorAux.nombres;
        compradorAux.apellidos = apellidos || compradorAux.apellidos;
        compradorAux.direccion = direccion || compradorAux.direccion;
        compradorAux.celular = celular || compradorAux.celular;
        compradorAux.genero = genero || compradorAux.genero;
        compradorAux.external_id = uuid.v4();

        await compradorAux.save();

        res.status(200);
        res.json({ msg: "OK", code: 200 });
    }
}

module.exports = CompradorControl;