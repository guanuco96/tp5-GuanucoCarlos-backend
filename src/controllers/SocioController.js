const Socio = require("../models/Socio");

exports.crearSocio = async (req, res) => {
    const socio = await Socio.create(req.body);
    res.json(socio);
};

exports.obtenerSocios = async (req, res) => {
    const socios = await Socio.findAll();
    res.json(socios);
};

exports.obtenerActivos = async (req, res) => {
    const socios = await Socio.findAll({
        where: { activo: true }
    });

    res.json(socios);
};

exports.modificarSocio = async (req, res) => {
    await Socio.update(req.body, {
        where: { id: req.params.id }
    });

    res.json({ mensaje: "Socio actualizado" });
};

exports.eliminarSocio = async (req, res) => {
    await Socio.destroy({
        where: { id: req.params.id }
    });

    res.json({ mensaje: "Socio eliminado" });
};