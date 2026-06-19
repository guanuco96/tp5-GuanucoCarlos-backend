const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Empleado = require("./Empleado");

const Publicacion = sequelize.define("Publicacion", {
    titulo:{type: DataTypes.STRING,allowNull: false},
    contenido:{type: DataTypes.STRING,allowNull: false},
    imagenAsociada:{type: DataTypes.TEXT,allowNull: false},
    fechaPublicacion: {type: DataTypes.STRING,allowNull: false},
    vigente: {type: DataTypes.BOOLEAN,allowNull: false}
});

Empleado.hasMany(Publicacion);
Publicacion.belongsTo(Empleado,{foreignKey:{ allowNull:false}});

module.exports = Publicacion;