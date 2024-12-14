const request = require('supertest');
const app = require('../app'); // Ajuste o caminho conforme necessário

let server;

beforeAll((done) => {
	server = app.listen(4000, done);
});

afterAll((done) => {
	server.close(done);
});

describe('GET /', () => {
	it('should return 200 OK and render the index page', async () => {
		const res = await request(server).get('/');
		expect(res.statusCode).toEqual(200);
		expect(res.text).toContain('CONECTE+ UNIVERSIDADES'); // Ajuste com base no conteúdo do seu index.ejs
	});
});

describe('GET /cursos', () => {
	it('should return 200 OK for the cursos route', async () => {
		const res = await request(server).get('/cursos');
		expect(res.statusCode).toEqual(200);
		expect(res.text).toContain('Cursos'); // Ajuste com base no conteúdo da página de cursos
	});
});

describe('GET /cursos/:id', () => { // Ajuste conforme necessário
	it('should return 200 OK for a specific curso', async () => {
		const res = await request(server).get('/cursos/100'); // Ajuste conforme necessário
		expect(res.statusCode).toEqual(200);
	});
});