const path = require('path');
const fs = require('fs');
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
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({ message: 'No hay archivos que subir' });

    }

    const {tabla, id} = req.params;
    let modelo;
    
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

    if(modelo.img) {
        const pathImagen = path.join(__dirname, '../uploads', tabla, modelo.img);
        if(fs.existsSync(pathImagen)) {
            fs.unlinkSync(pathImagen);
        }
    }

    const nombre = await subirArchivo(req.files, undefined, tabla);
    modelo.img = nombre;
    await modelo.save();

    res.json(modelo)
}

const mostrarImagen = async (req=request, res=response) => {
    const {tabla, id} = req.params;
    let modelo;
    
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

    if(modelo.img) {
        const pathImagen = path.join(__dirname, '../uploads', tabla, modelo.img);
        if(fs.existsSync(pathImagen)) {
            return res.sendFile(pathImagen);
        }
    }
    const pathImagen = path.join(__dirname, '../assets/no-image.jpg');
    res.sendFile(pathImagen);
}

module.exports = {
    cargarArchivo,
    actualizarImagen,
    mostrarImagen
}