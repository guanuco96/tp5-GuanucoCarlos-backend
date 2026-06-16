const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "tp5",
    "postgres",
    "pototo",
    {
        host: "localhost",
        dialect: "postgres",
        logging: false
    }
);

module.exports = sequelize;