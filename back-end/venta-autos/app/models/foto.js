"use strict";

module.exports = (sequelize, DataTypes) => {
    const foto = sequelize.define('foto',{
        archivo: {type: DataTypes.STRING(150), allowNull:true},
        external_id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    }, {timestamps: false, freezeTableName: true});
    foto.associate = function(models){
        foto.belongsTo(models.auto, {foreignKey: 'id_auto'});
    };
    return foto;
};