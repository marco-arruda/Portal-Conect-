require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();

// Configurar o mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public')); // Servir arquivos estáticos

const cursoRoutes = require('./routes/cursoRoutes');
app.use('/cursos', cursoRoutes); // Monte as rotas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});