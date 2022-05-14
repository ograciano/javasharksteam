const { request, response } = require("express");


const getAllDenuncias = (req = request, res = response) => {
    res.json({message: 'get todas las Denuncias listo '})
}
const getDenuncia = (req = request, res = response) => {
    const {id} = req.params;
    res.json({id, message: 'get una Denuncia listo '})
}
const postDenuncia = (req = request, res = response) => {
    const body = req.body;
    res.json({body, message: 'post Denuncia listo '})
}
const putDenuncia = (req = request, res = response) => {
    const {id} = req.params;
    const body = req.body;
    res.json({id, body, message: 'put Denuncia listo '})
}
const deleteDenuncia = (req = request, res = response) => {
    const {id} = req.params;
    res.json({id, message: 'delete Denuncia listo '})
}

module.exports = {
    getAllDenuncias,
    getDenuncia,
    postDenuncia,
    putDenuncia,
    deleteDenuncia
}