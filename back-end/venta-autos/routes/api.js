var express = require('express');
var router = express.Router();

const empleadoC = require('../app/controls/EmpleadoControl');
let empleadoControl = new empleadoC();

const rolC = require('../app/controls/RolControl');
let rolControl = new rolC();

const autoC = require('../app/controls/AutoControl');
let autoControl = new autoC();

const compradorC = require('../app/controls/CompradorControl');
let compradorControl = new compradorC();

const ventaC = require('../app/controls/VentaControl');
let ventaControl = new ventaC();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// api de empleado
router.get('/admin/empleados', empleadoControl.listar);
router.post('/admin/empleado/guardar', empleadoControl.guardar);
router.get('/admin/empleados/obtener/:external', empleadoControl.obtener);
router.patch('/admin/empleado/editar/:external', empleadoControl.modificar);

//api de rol
router.get('/admin/roles', rolControl.listar);
router.post('/admin/rol/guardar', rolControl.guardar);
router.patch('/admin/rol/editar/:external', rolControl.modificar);

//api de auto
router.get('/admin/autos', autoControl.listar);
router.post('/admin/auto/guardar', autoControl.guardar);
router.get('/admin/autos/obtener/:external', autoControl.obtener);
router.post('/admin/autos/file/guardar', autoControl.guardarFoto);
router.patch('/admin/auto/editar/:external', autoControl.modificar);

//api de comprador
router.get('/admin/compradores', compradorControl.listar);
router.post('/admin/comprador/guardar', compradorControl.guardar);
router.get('/admin/compradores/obtener/:external', compradorControl.obtener);
router.patch('/admin/comprador/editar/:external', compradorControl.modificar);

//api de venta
router.get('/admin/ventas', ventaControl.listar);
router.post('/admin/venta/guardar', ventaControl.guardar);
router.get('/admin/ventas/obtener/:external_empleado', ventaControl.obtenerPorEmpleado);
router.get('/admin/ventas/obtener/:external_empleado/:anio/:mes', ventaControl.obtenerPorFechaYEmpleado);
router.get('/admin/ventas/obtener/:anio/:mes', ventaControl.obtenerPorFecha);
router.patch('/admin/venta/editar/:external', ventaControl.modificar);



module.exports = router;
