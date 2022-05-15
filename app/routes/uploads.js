const { Router } = require("express");
const { check } = require('express-validator');
const { tablasPermitidas } = require("../helpers/db-validators");

const { validarCampos } = require('../middlewares/validar-campos');
const { cargarArchivo, actualizarImagen } = require("../routeControllers/uploads");


const router = Router();

router.post('/', cargarArchivo);
router.put('/:tabla/:id', [
    check('id', 'Debe ser numerico').isNumeric(),
    check('tabla').custom(c => tablasPermitidas(c, ['usuarios', 'denuncias'])),
    validarCampos
], actualizarImagen);


module.exports = router;