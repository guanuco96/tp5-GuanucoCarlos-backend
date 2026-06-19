const Empleado = require("../models/Empleado");

const empleadoCtrl = {};

empleadoCtrl.crear = async (req,res)=>{
    try {
        const empleado = await Empleado.create(req.body);

        res.json(empleado);

    } catch(error){

        res.status(500).json({
            mensaje:"Error al crear empleado",
            error:error.message
        });

    }
};

empleadoCtrl.obtenerTodos = async (req,res)=>{
    try {
        const empleados = await Empleado.findAll();

        res.json(empleados);

    } catch(error){
        res.status(500).json({
            mensaje:"Error al obtener empleados",
            error:error.message
        });

    }
};

empleadoCtrl.obtenerUno = async (req,res)=>{
    try {

        const empleado = await Empleado.findByPk(req.params.id);

        if(!empleado){
            return res.status(404).json({ mensaje:"Empleado no encontrado"});
        }

        res.json(empleado);

    } catch(error){

        res.status(500).json({
            mensaje:"Error al obtener empleado",
            error:error.message
        });

    }
};

module.exports = empleadoCtrl;