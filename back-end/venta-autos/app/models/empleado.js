"use strict";

module.exports = (sequelize, DataTypes) => {
    const empleado = sequelize.define('empleado',{
        apellidos: {type: DataTypes.STRING(150), defaultValue:"NONE"},
        nombres: {type: DataTypes.STRING(150), defaultValue:"NONE"},
        cedula: {type: DataTypes.STRING(10), defaultValue:"NONE"},
        direccion: {type: DataTypes.STRING, defaultValue:"NONE"},
        celular: {type: DataTypes.STRING(20), defaultValue:"NONE"},
        genero: {type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro')},
        external_id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, {freezeTableName: true});
        empleado.associate = function(models){
        empleado.hasOne(models.cuenta, {foreignKey: 'id_empleado', as: 'cuenta'});
        empleado.belongsTo(models.rol, {foreignKey: 'id_rol'});
        empleado.hasMany(models.venta, {foreignKey: 'id_empleado', as: 'venta'});
    };
    return empleado;
};