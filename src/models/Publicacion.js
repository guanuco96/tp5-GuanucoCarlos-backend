const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Empleado = require("./Empleado");

const Publicacion = sequelize.define("Publicacion", {
    titulo: DataTypes.STRING,
    contenido: DataTypes.STRING,
    imagenAsociada: DataTypes.TEXT,
    fechaPublicacion: DataTypes.STRING,
    vigente: DataTypes.BOOLEAN
});

Empleado.hasMany(Publicacion);
Publicacion.belongsTo(Empleado);

module.exports = Publicacion;