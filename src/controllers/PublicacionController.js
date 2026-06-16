const Publicacion = require("../models/Publicacion");
const Empleado = require("../models/Empleado");
const { Op } = require("sequelize");

exports.crear = async (req,res)=>{
    const publicacion = await Publicacion.create(req.body);

    res.json(publicacion);
};

exports.obtenerTodas = async (req,res)=>{
    const publicaciones = await Publicacion.findAll({
        include: Empleado
    });

    res.json(publicaciones);
};

exports.eliminar = async (req,res)=>{
    await Publicacion.destroy({
        where:{ id:req.params.id }
    });

    res.json({mensaje:"Publicación eliminada"});
};

exports.modificar = async (req,res)=>{
    await Publicacion.update(req.body,{
        where:{ id:req.params.id }
    });

    res.json({mensaje:"Publicación modificada"});
};

exports.buscar = async (req,res)=>{

    const publicaciones = await Publicacion.findAll({
        where:{
            titulo:{
                [Op.iLike]: `%${req.query.titulo}%`
            },
            vigente:req.query.vigente
        },
        include: Empleado
    });

    res.json(publicaciones);
};