const models = require('../app/models');
const inicializarRoles = require('./inicializarRoles');

const cuenta = models.cuenta;
const empleado = models.empleado;
const rol = models.rol;

async function inicializarGerente() {
    try {
        const empleadoAux = await empleado.findAll({
            where: { nombres: 'Iván' }
        });

        if (empleadoAux.length === 0) {
            const UUID = require('uuid');

            let rolAux = await rol.findOne({ where: { nombre: 'gerente' } });

            if (!rolAux) {
                await inicializarRoles();
                rolAux = await rol.findOne({ where: { nombre: 'gerente' } });
            }

            const gerente = await empleado.create({
                apellidos: 'González',
                nombres: 'Iván',
                cedula: '1234567890',
                direccion: 'Calle 123',
                celular: '0987654321',
                genero: 'Masculino',
                external_id: UUID.v4(),
                id_rol: rolAux.id
            });

            if (gerente) {
                await cuenta.create({
                    usuario: 'IvanG0nzalez',
                    clave: '1111',
                    external_id: UUID.v4(),
                    id_empleado: gerente.id
                });
            }
            console.log('\x1b[36m%s\x1b[0m', 'Gerente creado exitosamente.');
        } else {
            console.log('\x1b[35m%s\x1b[0m', 'El gerente ya existe en la base de datos.');
        }
    } catch (error) {
        console.error('Error al inicializar Gerente:', error);
    }
}

module.exports = inicializarGerente;