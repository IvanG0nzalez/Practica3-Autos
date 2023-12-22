"use strict";

module.exports = (sequelize, DataTypes) => {
    const venta = sequelize.define('venta',{
        numero: {type: DataTypes.INTEGER.UNSIGNED, allowNull: false, defaultValue: 0},
        recargo: {type: DataTypes.FLOAT.UNSIGNED, allowNull: false, defaultValue: 0},
        total: {type: DataTypes.FLOAT.UNSIGNED, allowNull: false, defaultValue: 0},
        external_id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, { freezeTableName: true});
    venta.associate = function(models){
        venta.belongsTo(models.empleado, {foreignKey: 'id_empleado'});
        venta.belongsTo(models.comprador, {foreignKey: 'id_comprador'});
        venta.hasMany(models.auto, {foreignKey: 'id_venta', as: 'auto'});
    };
    return venta;
};