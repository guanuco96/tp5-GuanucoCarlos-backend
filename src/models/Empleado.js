const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Empleado = sequelize.define("Empleado", {
    apellido: DataTypes.STRING,
    nombre: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = Empleado;