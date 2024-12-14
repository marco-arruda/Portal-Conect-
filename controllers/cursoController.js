const cursoModel = require('../models/cursoModel');

const cursoController = {
    async getAllCursos(req, res) {
        try {
            const cursos = await cursoModel.getAllCursos();
            res.render('cursos/cursos', { cursos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getCursoById(req, res) {
        try {
            const curso = await cursoModel.getCursoById(req.params.id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            res.json(curso);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async createCurso(req, res) {
        try {
            const curso = await cursoModel.createCurso(req.body);
            res.redirect('/cursos');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateCurso(req, res) {
        try {
            const curso = await cursoModel.updateCurso(req.params.id, req.body);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            res.redirect('/cursos'); // Redirecionar para a página de listagem de cursos
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async deleteCurso(req, res) {
        try {
            const success = await cursoModel.deleteCurso(req.params.id);
            if (success) {
                // Se a exclusão falhar, a operação não foi bem sucedida, não foi possível encontrar o curso.
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            res.redirect('/cursos');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async editCurso(req, res) {
        try {
            const curso = await cursoModel.getCursoById(req.params.id);
            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }
            res.render('cursos/editCurso', { curso });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async renderCreateCursoPage(req, res) {
        res.render('cursos/createCurso');
    },
    async index(req, res) {
        try {
            const cursos = await cursoModel.getAllCursos();
            res.render('index', { cursos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cursoController;