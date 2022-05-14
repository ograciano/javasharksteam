const { Router } = require("express");
const { getAllDenuncias, getDenuncia, postDenuncia, putDenuncia, deleteDenuncia } = require("../routeControllers/denuncias");

const router = Router();

router.get('/', getAllDenuncias);
router.get('/:id', getDenuncia);
router.post('/', postDenuncia);
router.put('/:id', putDenuncia);
router.delete('/:id', deleteDenuncia);

module.exports = router;
