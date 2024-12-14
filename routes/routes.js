const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.getAllCursos);
router.get('/create', cursoController.renderCreateCursoPage);
router.get('/:id', cursoController.getCursoById);
router.get('/:id/edit', cursoController.editCurso);
router.post('/', cursoController.createCurso);
router.put('/:id', cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);

module.exports = router;