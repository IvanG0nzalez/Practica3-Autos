'use strict';
var formidable = require('formidable');
var fs = require('fs');
var models = require('../models');
var auto = models.auto;
var foto = models.foto;
var extensiones = ['jpg', 'png', 'jpeg'];

class AutoControl {
    async listarAutos(req, res) {
        var lista = await auto.findAll({
            include: [
                { model: models.foto, as: "foto", attributes: ['archivo'] },
            ],
            attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'estado', 'external_id']
        });
        if (lista === undefined || lista === null) {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: {} });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }
    }

    async listarDisponibles(req, res) {
        var lista = await auto.findAll({
            where: { estado: true },
            include: [
                { model: models.foto, as: "foto", attributes: ['archivo'] },
            ],
            attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id']
        });
        if (lista === undefined || lista === null) {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: {} });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }
    }

    async listarVendidos(req, res) {
        var lista = await auto.findAll({
            where: { estado: false },
            include: [
                { model: models.foto, as: "foto", attributes: ['archivo'] },
            ],
            attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id']
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
        var lista = await auto.findOne({
            where: { external_id: external },
            include: [
                { model: models.foto, as: "foto", attributes: ['archivo'] },
            ],
            attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'estado', 'external_id']
        });
        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Auto no encontrado", code: 404 });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }

    }

    async guardar(req, res) {
        const {
            marca,
            modelo,
            anio,
            color,
            precio,
            venta
        } = req.body;

        if (marca &&
            modelo &&
            anio &&
            color &&
            precio
        ) {
            const uuid = require('uuid');

            const autoData = {
                marca,
                modelo,
                anio,
                color,
                precio,
                estado: true,
                external_id: uuid.v4(),
            };

            let transaction;

            try {
                transaction = await models.sequelize.transaction();

                const nuevoAuto = await models.auto.create(autoData, { transaction });

                if (venta) {
                    var ventaAux = await models.venta.findOne({ where: { external_id: venta }, transaction });

                    if (ventaAux) {
                        await nuevoAuto.setVenta(ventaAux, { transaction });
                    }
                }

                await transaction.commit();

                res.status(200);
                res.json({ msg: "OK", code: 200 });

            } catch (error) {
                if (transaction) await transaction.rollback();
                console.error(error);
                res.status(500);
                res.json({ msg: "Error del servidor", code: 500 });
            }
        } else {
            res.status(400);
            res.json({ msg: "Error", tag: "Faltan datos", code: 400 })
        }
    }

    async guardarFoto(req, res) {
        const form = new formidable.IncomingForm();
        const files = [];

        form.on('file', function (field, file) {
            files.push(file);
        }).on('end', async function () {
            console.log('Terminó de parsear files');
        });

        form.parse(req, async function (err, fields) {
            const listado = files;
            const external = fields.external[0]; // Cambiar el nombre del campo según sea necesario

            const externalAuto = fields.auto[0];
            const autoAux = await auto.findOne({
                where: { external_id: externalAuto }
            });

            var uuid = require('uuid');

            if (!autoAux) {
                res.status(404);
                res.json({ msg: "Error", tag: "Auto no encontrado", code: 404 });
                return;
            } else {
                var idAutoAux = autoAux.id;
            }

            for (let index = 0; index < listado.length; index++) {
                const file = listado[index];
                // validacion de tamanio
                if (file.size > 3 * 1024 * 1024) {
                    res.status(400);
                    res.json({ msg: 'ERROR', tag: `El archivo '${file.originalFilename}' es mayor a 3MB`, code: 400 });
                    return;
                }
                const extension = file.originalFilename.split('.').pop().toLowerCase();
                if (extensiones.includes(extension)) {
                    const name = external + '_' + index + '.' + extension;
                    console.log(name);

                    var dataFoto = {
                        archivo: name,
                        external_id: uuid.v4(),
                        id_auto: idAutoAux
                    }
                    var nuevaFoto = await foto.create(dataFoto);

                    /*if (nuevaFoto === null) {
                        res.status(401);
                        res.json({ msg: "Error", tag: `No se guardó la foto '${file.originalFilename}'`, code: 401 });
                        return;
                    }*/

                    fs.rename(file.filepath, 'public/multimedia/' + name, async function (err) {
                        if (err) {
                            res.status(400);
                            res.json({ msg: 'ERROR', tag: 'No se pudo guardar el archivo', code: 400 });
                            return;
                        }
                    });
                } else {
                    res.status(400);
                    res.json({ msg: 'ERROR', tag: 'Solo soporta ' + extensiones, code: 400 });
                }
            }
            //autoAux.external_id = uuid.v4();
            await autoAux.save();
            res.status(200);
            res.json({ msg: 'OK', tag: 'Archivo guardado', code: 200 });
        });
    }

    async modificar(req, res) {
        const external = req.params.external;
        const {
            marca,
            modelo,
            anio,
            color,
            precio
        } = req.body;
        var uuid = require('uuid');
        const autoAux = await auto.findOne({ where: { external_id: external } });

        if (!autoAux) {
            res.status(404);
            res.json({ msg: "Error", tag: "Auto no encontrado", code: 404 });
            return;
        } else {
            autoAux.marca = marca || autoAux.marca;
            autoAux.modelo = modelo || autoAux.modelo;
            autoAux.anio = anio || autoAux.anio;
            autoAux.color = color || autoAux.color;
            autoAux.precio = precio || autoAux.precio;
            //autoAux.external_id = uuid.v4();

            await autoAux.save();

            res.status(200);
            res.json({ msg: "OK", code: 200 });
        }
    }

}

module.exports = AutoControl;