'use strict';

var models = require('../models')
var venta = models.venta;
var empleadO = models.empleado;
var compradoR = models.comprador;
var autO = models.auto;

class VentaControl {
    async listar(req, res) {
        var lista = await venta.findAll({
            include: [
                { model: models.comprador, as: "comprador", attributes: ['nombres', 'apellidos', 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac', 'external_id'] },
                { model: models.empleado, as: "empleado", attributes: ['nombres', 'apellidos', 'cedula'] },
                {
                    model: models.auto,
                    as: "auto",
                    attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id'],
                    include:
                        [
                            { model: models.foto, as: "foto", attributes: ['archivo', 'external_id'] }
                        ]
                }
            ],
            attributes: ['numero', 'recargo', 'total', 'external_id']
        });
        if (lista === undefined || lista === null) {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: {} });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }
    }

    async obtenerPorEmpleado(req, res) {
        const external = req.params.external_empleado;

        const empleadoAux = await empleadO.findOne({ where: { external_id: external } });
 
        if(!empleadoAux){
            res.status(401);
            res.json({ msg: "Error", tag: "El empleado no existe", code: 401 });
            return;
        }

        var lista = await venta.findAll({
            where: { id_empleado: empleadoAux.id },
            include: [
                { model: models.comprador, as: "comprador", attributes: ['nombres', 'apellidos', 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac', 'external_id'] },
                {
                    model: models.auto,
                    as: "auto",
                    attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id'],
                    include:
                        [
                            { model: models.foto, as: "foto", attributes: ['archivo', 'external_id'] }
                        ]
                }
            ],
            attributes: ['numero', 'recargo', 'total', 'external_id']
        });

        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Ventas no encontradas", code: 404 });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista });
        }

    }

    async obtenerPorFechaYEmpleado(req, res) {
        const {external_empleado, mes, anio} = req.params;

        const empleadoAux = await empleadO.findOne({ where: { external_id: external_empleado } });
 
        if(!empleadoAux){
            res.status(401);
            res.json({ msg: "Error", tag: "El empleado no existe", code: 401 });
            return;
        } 

        const fechaInicio = new Date(anio, mes - 1, 1);
        const fechaFin =new Date(anio, mes, 0);

        var lista = await venta.findAll({
            where: { 
                id_empleado: empleadoAux.id,
                createdAt: {
                    [models.Sequelize.Op.between]: [fechaInicio, fechaFin]
                }
            },
            include: [
                { model: models.comprador, as: "comprador", attributes: ['nombres', 'apellidos', 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac', 'external_id'] },
                {
                    model: models.auto,
                    as: "auto",
                    attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id'],
                    include:
                        [
                            { model: models.foto, as: "foto", attributes: ['archivo', 'external_id'] }
                        ]
                }
            ],
            attributes: ['numero', 'recargo', 'total', 'external_id']
        });

        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Ventas no encontradas", code: 404 });
        } else if(lista.length === 0){
            res.status(200);
            res.json({ msg: "OK", tag:"No hay ventas en el mes o año ingresados", code: 200 });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista }); 
        }

    }

    async obtenerPorFecha(req, res) {
        const {mes, anio} = req.params;

        const fechaInicio = new Date(anio, mes - 1, 1);
        const fechaFin =new Date(anio, mes, 0);

        var lista = await venta.findAll({
            where: { 
                createdAt: {
                    [models.Sequelize.Op.between]: [fechaInicio, fechaFin]
                }
            },
            include: [
                { model: models.comprador, as: "comprador", attributes: ['nombres', 'apellidos', 'cedula', 'direccion', 'celular', 'genero', 'fecha_nac', 'external_id'] },
                { model: models.empleado, as: "empleado", attributes: ['nombres', 'apellidos', 'cedula'] },
                {
                    model: models.auto,
                    as: "auto",
                    attributes: ['marca', 'modelo', 'anio', 'color', 'precio', 'external_id'],
                    include:
                        [
                            { model: models.foto, as: "foto", attributes: ['archivo', 'external_id'] }
                        ]
                }
            ],
            attributes: ['numero', 'recargo', 'total', 'external_id']
        });

        if (lista === undefined || lista === null) {
            res.status(404);
            res.json({ msg: "Error", tag: "Ventas no encontradas", code: 404 });
        } else if(lista.length === 0){
            res.status(200);
            res.json({ msg: "OK", tag:"No hay ventas en el mes o año ingresados", code: 200 });
        } else {
            res.status(200);
            res.json({ msg: "OK", code: 200, datos: lista }); 
        }

    }

    async guardar(req, res) {

        const { numero, empleado, comprador, autos } = req.body;

        if (!numero || !empleado || !comprador || autos.length === 0) {
            res.status(400)
            res.json({ msg: "Error", tag: "Faltan datos", code: 400 });
            return;
        }

        var uuid = require('uuid');

        const empleadoAux = await empleadO.findOne({ where: { external_id: empleado } });
        const compradorAux = await compradoR.findOne({ where: { external_id: comprador } });
        //const autoAux = await autO.findOne({ where: { external_id: auto } });

        if (!empleadoAux) {
            res.status(401);
            res.json({ msg: "Error", tag: "El empleado no existe", code: 401 });
            return;
        }

        if (!compradorAux) {
            res.status(401);
            res.json({ msg: "Error", tag: "El comprador no existe", code: 401 });
            return;
        }

        /*if (!autoAux) {
            res.status(401);
            res.json({ msg: "Error", tag: "El auto no existe", code: 401 });
            return;
        }*/

        //const totalPagar = autoAux.precio;

        let transaction = await models.sequelize.transaction();
        try {

            const autosEnBD = await autO.findAll({where: {external_id: autos}});
            console.log(autosEnBD);
            if (autosEnBD.length !== autos.length) {
                res.status(401);
                res.json({ msg: "Error", tag: "Al menos uno de los autos no existe", code: 401 });
                return;
            }

            let recargoTotal = 0;
            const totalPagar = autosEnBD.reduce((total, auto) => {
                //console.log('Precio del auto:', auto.precio);
                let precioAuto = auto.precio;
                let recargoAuto = 0;

                if(auto.color && !["blanco", "plata"].includes(auto.color.toLowerCase())) {
                    recargoAuto = precioAuto * 0.05;
                    precioAuto += recargoAuto;
                }
                //console.log(recargoAuto);

                recargoTotal += recargoAuto;

                return total + precioAuto;
            }, 0);

            
            

            var result = await venta.create(
                {
                    numero,
                    recargo: recargoTotal,
                    total: totalPagar,
                    id_empleado: empleadoAux.id,
                    id_comprador: compradorAux.id,
                    external_id: uuid.v4()
                },
                {
                    include: [
                        { model: models.empleado, as: "empleado" },
                        { model: models.comprador, as: "comprador" },
                        //{ model: models.auto, as: "auto" }
                    ],
                    transaction
                }
            );//Incluir modelos con los que se relaciona


            await result.addAuto(autosEnBD, { transaction });

            await transaction.commit();

            if (result === null) {
                res.status(401);
                res.json({ msg: "Error", tag: "No se guardó la venta", code: 401 });
            } else {
                empleadoAux.external_id = uuid.v4();
                await empleadoAux.save();
                compradorAux.external_id = uuid.v4();
                await compradorAux.save();
                //autoAux.external_id = uuid.v4();
                //await autoAux.save();
                for (const auto of autosEnBD) {
                    auto.external_id = uuid.v4();
                    await auto.save();
                }

                res.status(200);
                res.json({ msg: "OK", code: 200 });
            }
        } catch (error) {
            console.error('Error:', error);
            if (transaction) await transaction.rollback();
            res.status(203);
            res.json({ msg: "Error", code: 203, error_msg: error });
        }

    }

    async modificar(req, res) {
        const external = req.params.external; // ID de la venta a modificar
        const { autos } = req.body; // Lista de autos actualizada
    
        let transaction = await models.sequelize.transaction();
    
        try {
            // Obtener la venta existente
            const ventaExistente = await venta.findOne({
                where: { external_id: external },
                include: [
                    { model: models.auto, as: "auto", attributes: ['external_id', 'precio', 'color'] }
                ]
            });
    
            if (!ventaExistente) {
                res.status(404);
                res.json({ msg: "Error", tag: "Venta no encontrada", code: 404 });
                return;
            }
    
            // Identificar los autos a agregar y eliminar
            const autosActuales = ventaExistente.auto.map(auto => auto.external_id);
            console.log("actuales", autosActuales);
            const autosEliminar = autosActuales.filter(autoId => !autos.includes(autoId));
            console.log("a eliminar", autosEliminar);
            const autosAgregar = autos.filter(autoId => !autosActuales.includes(autoId));
            console.log("agregar", autosAgregar);

            const autosEliminarConIDs = await autO.findAll({
                attributes: ['id'],
                where: { external_id: autosEliminar },
                transaction,
              });
              
            const idsAutosEliminar = autosEliminarConIDs.map(auto => auto.id);
            console.log("ids de los autos a eliminar", idsAutosEliminar);
            // Eliminar autos de la venta
            await ventaExistente.removeAuto(idsAutosEliminar, { transaction });
    
            // Agregar nuevos autos a la venta
            const autosNuevos = await autO.findAll({ where: { external_id: autosAgregar } });
            await ventaExistente.addAuto(autosNuevos, { transaction });
    
            // Calcular el nuevo recargo y total
            let recargoTotal = 0;
            console.log("venta auto", ventaExistente.auto);
            const totalPagar = ventaExistente.auto.reduce((total, auto) => {
                console.log("auto", auto);
                let precioAuto = auto.precio;
                let recargoAuto = 0;
    
                if (auto.color && !["blanco", "plata"].includes(auto.color.toLowerCase())) {
                    recargoAuto = precioAuto * 0.05;
                    precioAuto += recargoAuto;
                }
    
                recargoTotal += recargoAuto;

                console.log("precioAuto:", precioAuto);
                console.log("recargoAuto:", recargoAuto);
                console.log("total acumulado:", total + precioAuto);
    
                return total + precioAuto;
            }, 0);


            console.log("recargoTotal:", recargoTotal);
            console.log("totalPagar al final:", totalPagar);
    
            // Actualizar la venta con la nueva información
            await ventaExistente.update(
                {
                    recargo: recargoTotal,
                    total: totalPagar,
                },
                { transaction }
            );
    
            await transaction.commit();
    
            res.status(200);
            res.json({ msg: "OK", code: 200 });
        } catch (error) {
            console.error('Error:', error);
            if (transaction) await transaction.rollback();
            res.status(203);
            res.json({ msg: "Error", code: 203, error_msg: error });
        }
    }
    

}

module.exports = VentaControl;