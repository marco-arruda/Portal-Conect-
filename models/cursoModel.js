const supabase = require('../supabaseClient');

const cursoModel = {
    async getAllCursos() {
        try {
            const { data, error } = await supabase
                .from('cursos')
                .select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    },
    async getCursoById(id) {
        try {
            const { data, error } = await supabase
                .from('cursos')
                .select('*')
                .eq('id_curso', id)
                .single();
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    },
    async createCurso(curso) {
        try {
            const { data, error } = await supabase
                .from('cursos')
                .insert(curso);
            if (error) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    },
    async updateCurso(id, curso) {
        try {
            const { data, error } = await supabase
                .from('cursos')
                .update(curso)
                .eq('id_curso', id)
                .select(); // Adicione .select() para retornar o curso atualizado
            if (error) throw error;
            return data[0]; // Retorne o primeiro item do array de dados
        } catch (error) {
            throw error;
        }
    },
    async deleteCurso(id) {
        try {
            const { data, error, count } = await supabase
                .from('cursos')
                .delete()
                .eq('id_curso', id);
            if (error) throw error;
            return count > 0
        } catch (error) {
            throw error;
        }
    },
};

module.exports = cursoModel;