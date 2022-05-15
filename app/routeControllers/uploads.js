
const { request, response } = require("express");
const subirArchivo = require("../helpers/subir-archivo");


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

module.exports = {
    cargarArchivo
}