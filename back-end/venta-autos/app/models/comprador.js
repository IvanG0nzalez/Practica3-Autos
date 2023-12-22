"use strict";

module.exports = (sequelize, DataTypes) => {
    const comprador = sequelize.define('comprador',{
        apellidos: {type: DataTypes.STRING(150), defaultValue:"NONE"},
        nombres: {type: DataTypes.STRING(150), defaultValue:"NONE"},
        cedula: {type: DataTypes.STRING(10), defaultValue:"NONE"},
        direccion: {type: DataTypes.STRING, defaultValue:"NONE"},
        celular: {type: DataTypes.STRING(20), defaultValue:"NONE"},
        genero: {type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro')},
        fecha_nac: {type: DataTypes.DATEONLY},
        external_id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, {freezeTableName: true});
    comprador.associate = function(models){
        comprador.hasMany(models.venta, {foreignKey: 'id_comprador', as: 'venta'});
    };
    return comprador;
};