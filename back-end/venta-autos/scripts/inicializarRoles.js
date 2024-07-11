const models = require('../app/models');
const rol = models.rol;

async function inicializarRoles() {
    try {
        const rolAux = await rol.findAll();

        if (rolAux.length === 0) {
            const UUID = require('uuid');

            await rol.bulkCreate([
                { nombre: "gerente", external_id: UUID.v4() },
                { nombre: "vendedor", external_id: UUID.v4() },
                { nombre: "cliente", external_id: UUID.v4() }
            ]);
            console.log('\x1b[36m%s\x1b[0m', 'Roles creados exitosamente.');
        } else {
            console.log('\x1b[35m%s\x1b[0m', 'Los roles ya existen en la base de datos.');
        }
    } catch (error) {
        console.error('Error al inicializar roles:', error);
    }
}

module.exports = inicializarRoles;