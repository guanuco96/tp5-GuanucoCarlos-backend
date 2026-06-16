const Empleado = require("../models/Empleado");
exports.crear = async (req,res)=>{
    const empleado = await Empleado.create(req.body);

    res.json(empleado);
};

exports.obtenerTodos = async (req,res)=>{
    const empleados = await Empleado.findAll();

    res.json(empleados);
};

exports.obtenerUno = async (req,res)=>{
    const empleado = await Empleado.findByPk(req.params.id);

    res.json(empleado);
};