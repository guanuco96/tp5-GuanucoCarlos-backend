const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Transaccion = sequelize.define("Transaccion", {
    idiomaOrigen: DataTypes.STRING,
    textoOrigen: DataTypes.STRING,
    idiomaDestino: DataTypes.STRING,
    textoDestino: DataTypes.STRING,
    emailCliente: DataTypes.STRING
});

module.exports = Transaccion;