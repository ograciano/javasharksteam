const { request, response } = require("express");
const Denuncias = require("../models/denuncia");


const getAllDenuncias = async (req = request, res = response) => {
    try {
        const denuncias = await Denuncias.findAll();
        res.json({denuncias})
        
    } catch (error) {
        console.log(error);
        res.json({message: 'Error en el servidor Verifica con tu admiistrador'});
    }
}
const getDenuncia = async (req = request, res = response) => {
    try {
        const {id} = req.params;
        const denuncia = await Denuncias.findByPk(id);
        res.json(denuncia)
        
    } catch (error) {
        console.log(error);
        res.json({message: 'Error en el servidor Verifica con tu admiistrador'});
    }
}
const postDenuncia = async (req = request, res = response) => {
    try {
        await Denuncias.sync();
        const body = req.body;
        const denuncia = Denuncias.build(body);
        await denuncia.save();
        res.json({message: 'Denuncia creada con exito'});
    } catch (error) {
        console.log(error);
        res.json({message: 'Error en el servidor Verifica con tu admiistrador'});
    }
}
const putDenuncia = async (req = request, res = response) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const denuncia = Denuncias.findByPk(id);
        await (await denuncia).update(body);
        res.json({message: 'Denuncia actualizada exitosamente'})
    } catch (error) {
        console.log(error);
        res.json({message: 'Error en el servidor Verifica con tu admiistrador'});
    }
}
const deleteDenuncia = async (req = request, res = response) => {
    try {
        const {id} = req.params;
        const denuncia = Denuncias.findByPk(id);
        if (!denuncia) {
            return res.json({msg: 'No existe una denuncia con el id: ' + id});
        }
        (await denuncia).destroy();
        res.json({message: 'Resgistro borrado de la base de datos'})
    } catch (error) {
        console.log(error);
        res.json({message: 'Error en el servidor Verifica con tu admiistrador'});
    }
}

module.exports = {
    getAllDenuncias,
    getDenuncia,
    postDenuncia,
    putDenuncia,
    deleteDenuncia
}