const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Socio = sequelize.define("Socio", {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    foto: DataTypes.STRING,
    dni: DataTypes.STRING,
    numeroSocio: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
});

module.exports = Socio;