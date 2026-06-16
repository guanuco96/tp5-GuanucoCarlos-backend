const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();


app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use("/socios", require("./src/routes/socios"));
app.use("/transacciones", require("./src/routes/transacciones"));
app.use("/empleados", require("./src/routes/empleados"));
app.use("/publicaciones", require("./src/routes/publicaciones"));

app.set('port', process.env.PORT || 3000);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas de PostgreSQL sincronizadas');

    app.listen(app.get('port'), () => {
        console.log(`Server started on port ${app.get('port')}`);
    });

})
.catch(err => {
    console.error(
        'No se pudo iniciar el servidor debido a un error en la BD:',
        err
    );
});