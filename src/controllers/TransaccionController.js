const Transaccion = require("../models/Transaccion");

exports.crear = async (req,res)=>{
    const transaccion = await Transaccion.create(req.body);

    res.json(transaccion);
};

exports.obtenerTodas = async (req,res)=>{
    const transacciones = await Transaccion.findAll();

    res.json(transacciones);
};

exports.obtenerPorEmail = async (req,res)=>{
    const resultado = await Transaccion.findAll({
        where:{
            emailCliente:req.params.email
        }
    });

    res.json(resultado);
};

exports.obtenerPorIdiomas = async (req,res)=>{
    const resultado = await Transaccion.findAll({
        where:{
            idiomaOrigen:req.params.origen,
            idiomaDestino:req.params.destino
        }
    });

    res.json(resultado);
};