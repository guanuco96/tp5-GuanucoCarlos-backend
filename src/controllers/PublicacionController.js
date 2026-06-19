const Publicacion = require("../models/Publicacion");
const Empleado = require("../models/Empleado");
const { Op } = require("sequelize");

const publicacionCtrl = {};

publicacionCtrl.crear = async (req,res)=>{

    try{

        const empleado = await Empleado.findByPk(req.body.EmpleadoId);

        if(!empleado){
            return res.status(404).json({mensaje:"Empleado no encontrado"});
        }

        const publicacion = await Publicacion.create(req.body);

        res.json(publicacion);

    }catch(error){

        res.status(500).json({
            mensaje:"Error al crear publicación",
            error:error.message
        });

    }

};


publicacionCtrl.obtenerTodas = async (req,res)=>{
    try {

        const publicaciones = await Publicacion.findAll({include: Empleado});

        res.json(publicaciones);

    } catch(error){

        res.status(500).json({
            mensaje:"Error al obtener publicaciones",
            error:error.message
        });

    }
};


publicacionCtrl.eliminar = async (req,res)=>{
    try {

        await Publicacion.destroy({ where:{ id:req.params.id }});

        res.json({
            mensaje:"Publicación eliminada"
        });

    } catch(error){

        res.status(500).json({
            mensaje:"Error al eliminar publicación",
            error:error.message
        });

    }
};


publicacionCtrl.modificar = async (req,res)=>{
    try {

        await Publicacion.update(req.body,{
            where:{ id:req.params.id }
        });

        res.json({
            mensaje:"Publicación modificada"
        });

    } catch(error){

        res.status(500).json({
            mensaje:"Error al modificar publicación",
            error:error.message
        });

    }
};

publicacionCtrl.buscar = async (req,res)=>{
    try {

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

    } catch(error){

        res.status(500).json({
            mensaje:"Error al buscar publicaciones",
            error:error.message
        });

    }
};

module.exports = publicacionCtrl;