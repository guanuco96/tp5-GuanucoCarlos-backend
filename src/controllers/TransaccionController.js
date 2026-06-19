const Transaccion = require("../models/Transaccion");

const transaccionCtrl = {};

transaccionCtrl.crear = async (req, res) => {
    try {

        const transaccion = await Transaccion.create(req.body);

        res.json(transaccion);

    } catch (error) {

        res.status(500).json({ mensaje: "Error al crear la transacción", error: error.message
        });

    }
};


transaccionCtrl.obtenerTodas = async (req, res) => {
    try {

        const transacciones = await Transaccion.findAll();

        res.json(transacciones);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener las transacciones",
            error: error.message
        });

    }
};

transaccionCtrl.obtenerPorEmail = async (req, res) => {
    try {

        const resultado = await Transaccion.findAll({
            where: { emailCliente: req.params.email}
        });

        if (resultado.length === 0) {
        return res.status(404).json({status: '0',msg: 'No se encontró ninguno con ese Email'});
}

        res.json(resultado);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al buscar transacciones por email",
            error: error.message
        });

    }
};


transaccionCtrl.obtenerPorIdiomas = async (req, res) => {
    try {

        const resultado = await Transaccion.findAll({
            where: {
                idiomaOrigen: req.params.origen,
                idiomaDestino: req.params.destino
            }
        });

        if (resultado.length === 0) {
            return res.status(404).json({status: '0',msg: 'No se encontró ninguna transacción con esos idiomas'});
        }
        res.json(resultado);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al buscar transacciones por idiomas",
            error: error.message
        });

    }
};

module.exports = transaccionCtrl;