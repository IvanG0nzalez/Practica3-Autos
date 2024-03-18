var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');

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

const cuentaC = require('../app/controls/CuentaControl');
let cuentaControl = new cuentaC();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//middleware
const authGerente = function middleware(req, res, next) {
  const token = req.headers['token'];
  if(token === undefined) {
    res.status(401);
    res.json({ msg: "Error", tag: "Falta token", code: 401 });
  } else {
    require('dotenv').config();
    const key = process.env.KEY;
    jwt.verify(token, key, async (err, decoded) => {
      if(err) {
        res.status(401);
        res.json({ msg: "Error", tag: "Token no válido o expirado", code: 401 });
      } else {
        console.log(decoded);
        console.log(decoded.external);
        const models = require('../app/models');
        const cuenta = models.cuenta;
        const aux = await cuenta.findOne({
          where: {external_id: decoded.external}
        });
        if(aux === null) {
          res.status(401);
          res.json({ msg: "Error", tag: "Token no válido", code: 401 });
        } else {
          if(decoded.rol === "gerente") {
            next();
          } else {
            res.status(401);
            res.json({ msg: "Error", tag: "No tienes acceso a este recurso", code: 401 });
          }          
        }
      }
    })
  }
}

const auth = function middleware(req, res, next) {
  const token = req.headers['token'];
  if(token === undefined) {
    res.status(401);
    res.json({ msg: "Error", tag: "Falta token", code: 401 });
  } else {
    require('dotenv').config();
    const key = process.env.KEY;
    jwt.verify(token, key, async (err, decoded) => {
      if(err) {
        res.status(401);
        res.json({ msg: "Error", tag: "Token no válido o expirado", code: 401 });
      } else {
        console.log(decoded);
        console.log(decoded.external);
        const models = require('../app/models');
        const cuenta = models.cuenta;
        const aux = await cuenta.findOne({
          where: {external_id: decoded.external}
        });
        if(aux === null) {
          res.status(401);
          res.json({ msg: "Error", tag: "Token no válido", code: 401 });
        } else {
          if(decoded.rol === "gerente" || decoded.rol === "vendedor") {
            next();
          } else {
            res.status(401);
            res.json({ msg: "Error", tag: "No tienes acceso a este recurso", code: 401 });
          }   
        }
      }
    })
  }
}


//inicio sesion
router.post('/inicio-sesion', cuentaControl.inicio_sesion);


// api de empleado
router.get('/admin/empleados', authGerente,empleadoControl.listar);
router.post('/admin/empleado/guardar', authGerente, empleadoControl.guardar);
router.get('/admin/empleados/obtener/:external', authGerente, empleadoControl.obtener);
router.patch('/admin/empleado/editar/:external', authGerente, empleadoControl.modificar);

//api de rol
router.get('/admin/roles', authGerente, rolControl.listar);
router.post('/admin/rol/guardar', authGerente,rolControl.guardar);
router.patch('/admin/rol/editar/:external', authGerente, rolControl.modificar);

//api de auto
router.get('/admin/autos', authGerente, autoControl.listarAutos);
router.get('/admin/autosDisponibles', auth, autoControl.listarDisponibles);
router.get('/admin/autosVendidos', authGerente, autoControl.listarVendidos);
router.post('/admin/auto/guardar', authGerente, autoControl.guardar);
router.get('/admin/autos/obtener/:external', authGerente, autoControl.obtener);
router.post('/admin/autos/file/guardar', authGerente, autoControl.guardarFoto);
router.patch('/admin/auto/editar/:external', authGerente, autoControl.modificar);
//ruta para las imagenes
router.use('/multimedia', express.static('public/multimedia'));

//api de comprador
router.get('/admin/compradores', compradorControl.listar);
router.post('/admin/comprador/guardar', auth, compradorControl.guardar);
router.get('/admin/compradores/obtener/:external', compradorControl.obtener);
router.patch('/admin/comprador/editar/:external', auth, compradorControl.modificar);

//api de venta
router.get('/admin/ventas', auth, ventaControl.listar);
router.post('/admin/venta/guardar', auth, ventaControl.guardar);
router.get('/admin/ventas/obtener/:external', auth, ventaControl.obtener);
router.get('/admin/ventas/obtener/e/:external_empleado', auth, ventaControl.obtenerPorEmpleado);
router.get('/admin/ventas/obtener/e/:external_empleado/:anio/:mes', auth, ventaControl.obtenerPorFechaYEmpleado);
router.get('/admin/ventas/obtener/:anio/:mes', auth, ventaControl.obtenerPorFecha);
router.patch('/admin/venta/editar/:external', auth, ventaControl.modificar);



module.exports = router;
