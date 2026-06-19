const Socio = require("../models/Socio");

const socioCtrl = {};

socioCtrl.crearSocio = async (req, res) => {
    try {
        const socio = await Socio.create(req.body);
        res.json(socio);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear socio", error: error.message
        });
    }
};

socioCtrl.obtenerSocios = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener socios",error: error.message
        });
    }
};


socioCtrl.obtenerActivos = async (req, res) => {
    try {
        const socios = await Socio.findAll({
            where:{ activo: true}
        });
        res.json(socios);

    } catch (error) {
        res.status(500).json({mensaje: "Error al obtener socios activos",error: error.message
        });
    }
};

socioCtrl.modificarSocio = async (req, res) => {
    try {

        await Socio.update(req.body, {
            where: {id: req.params.id}
        });

        res.json({mensaje: "Socio actualizado"});

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar socio",
            error: error.message
        });

    }
};


socioCtrl.eliminarSocio = async (req, res) => {
    try {
        await Socio.destroy({
            where: {id: req.params.id}
        });
        res.json({mensaje: "Socio eliminado"});

    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar socio",error: error.message});
    }
};

module.exports = socioCtrl;