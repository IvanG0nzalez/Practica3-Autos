'use strict';
var models = require('../models');
var empleado = models.empleado;
var rol = models.rol;
class EmpleadoControl {
    async listar(req, res) {
        var lista = await empleado.findAll({
            include: [
                { model: models.cuenta, as: "cuenta", attributes: ['usuario'] },
                { model: models.rol, as: "rol", attributes: ['nombre'] }
            ],
            attributes: ['nombres', 'apellidos', 'external_id', 'cedula', 'direccion', 'celular', 'genero']
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
        var lista = await empleado.findOne({
            where: { external_id: external },
            include: [
                { model: models.cuenta, as: "cuenta", attributes: ['usuario'] },
                { model: models.rol, as: "rol", attributes: ['nombre'] }
            ],
            attributes: ['nombres', 'apellidos', 'external_id', 'cedula', 'direccion', 'celular', 'genero']
        });
        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Empleado no encontrado", code: 404 });
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
            req.body.hasOwnProperty('usuario') &&
            req.body.hasOwnProperty('clave') &&
            req.body.hasOwnProperty('rol')) {
            var uuid = require('uuid');
            var rolAux = await rol.findOne({ where: { external_id: req.body.rol } }); //Busca el objeto rol con el mismo external_id y lo asigna a rolAux
            if (rolAux != undefined) {
                var data = {
                    apellidos: req.body.apellidos,
                    nombres: req.body.nombres,
                    cedula: req.body.cedula,
                    direccion: req.body.direccion,
                    celular: req.body.celular,
                    genero: req.body.genero,
                    id_rol: rolAux.id,
                    external_id: uuid.v4(),
                    cuenta: {
                        usuario: req.body.usuario,
                        clave: req.body.clave
                    }
                }
                let transaction = await models.sequelize.transaction();
                try {
                    var result = await empleado.create(data, { include: [{ model: models.cuenta, as: "cuenta" }], transaction });//Incluir modelos con los que se relaciona
                    await transaction.commit();
                    if (result === null) {
                        res.status(401);
                        res.json({ msg: "Error", tag: "No se creó", code: 401 });
                    } else {
                        rolAux.external_id = uuid.v4();
                        await rolAux.save();
                        res.status(200);
                        res.json({ msg: "OK", code: 200 });
                    }
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    res.status(203);
                    res.json({ msg: "Error", code: 203, error_msg: error });
                }

            } else {
                res.status(401);
                res.json({ msg: "Error", tag: "El rol no existe", code: 401 });
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
            external_rol,
            clave
        } = req.body;
        var uuid = require('uuid');
        let empleadoAux;
        let rolAux;
        if (genero !== "Masculino" && genero !== "Femenino" && genero !== "Otro") {
            res.status(400);
            res.json({ msg: "Error", tag: "El genero ingresado no es válido, usar 'Masculino', 'Femenino' u 'Otro'", code: 400 });
            return;
        }

        if (external_rol) {
            rolAux = await rol.findOne({ where: { external_id: external_rol } });

            if (!rolAux) {
                res.status(404)
                res.json({ msg: "Error", tag: "El rol no existe", code: 404 });
                return;
            }

            empleadoAux = await empleado.findOne({
                where: { external_id: external },
                include: [
                    { model: models.cuenta, as: "cuenta" },
                    { model: models.rol, as: "rol", attributes: ['id'] }
                ],
            });
        } else {
            empleadoAux = await empleado.findOne({
                where: { external_id: external },
                include: [
                    { model: models.cuenta, as: "cuenta" },
                ],
            });
        }

        if (!empleadoAux) {
            res.status(404);
            res.json({ msg: "Error", tag: "Empleado no encontrado", code: 404 });
            return;
        }

        empleadoAux.nombres = nombres || empleadoAux.nombres;
        empleadoAux.apellidos = apellidos || empleadoAux.apellidos;
        empleadoAux.direccion = direccion || empleadoAux.direccion;
        empleadoAux.celular = celular || empleadoAux.celular;
        empleadoAux.genero = genero || empleadoAux.genero;

        if (rolAux) {
            empleadoAux.id_rol = rolAux.id || empleadoAux.id_rol;
            rolAux.external_id = uuid.v4();
            await rolAux.save();
        }

        if (clave) {
            empleadoAux.cuenta.clave = clave;
            await empleadoAux.cuenta.save();
        }

        empleadoAux.external_id = uuid.v4();
        await empleadoAux.save();

        res.status(200);
        res.json({ msg: "OK", code: 200 });
    }
}
module.exports = EmpleadoControl;