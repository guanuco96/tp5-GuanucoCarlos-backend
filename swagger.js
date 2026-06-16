const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TP5 Backend API",
            version: "1.0.0",
            description: "Documentación de la API del TP5"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsdoc(options);