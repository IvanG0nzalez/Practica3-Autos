"use strict";

module.exports = (sequelize, DataTypes) => {
    const auto = sequelize.define('auto',{
        marca: {type: DataTypes.STRING(100), defaultValue: "NONE"},
        modelo: {type: DataTypes.STRING(100), defaultValue: "NONE"},
        anio: {type: DataTypes.INTEGER.UNSIGNED, defaultValue: 0},
        color: {type: DataTypes.STRING(100), defaultValue: "NONE"},
        precio: {type: DataTypes.FLOAT.UNSIGNED, allowNull: false, defaultValue: 0},
        estado: {type: DataTypes.BOOLEAN, defaultValue:true},
        external_id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, {timestamps: false, freezeTableName: true});
    auto.associate = function(models){
        auto.belongsTo(models.venta, {foreignKey: 'id_venta', allowNull: true});
        auto.hasMany(models.foto, {foreignKey: 'id_auto', as: 'foto'});
    };
    return auto;
};