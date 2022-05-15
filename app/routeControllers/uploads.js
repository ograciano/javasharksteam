
const { request, response } = require("express");
const subirArchivo = require("../helpers/subir-archivo");

const Denuncias = require('../models/denuncia');


const cargarArchivo = async (req = request, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ message: 'No hay archivos que subir' });

    }

    try {
        const pathCompleto = await subirArchivo(req.files, undefined, 'img');
        res.json({path: pathCompleto});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'error en el servidor consulte con su administrador'})
    }    

}

const actualizarImagen = async (req=request, res=response) => {
    const {tabla, id} = req.params;
    
    switch (tabla) {
        case 'denuncias':
              modelo = await Denuncias.findByPk(id);
              if(!modelo) {
                  return res.status(400).json({message: `No esiste denuncia con el id: ${id}`});
              }
        break;
    
        default:
            res.status(500).json({message: 'Error en la coleccion valida que exista'});
    }

    const nombre = await subirArchivo(req.files, undefined, tabla);
    modelo.img = nombre;
    await modelo.save();

    res.json(modelo)
}

module.exports = {
    cargarArchivo,
    actualizarImagen
}