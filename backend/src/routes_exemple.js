const express = require('express');

const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma infomação no back-end
 * PUT: Alterar uma infomação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */


routes.get('/hello', (request, response) => {
    const params = request.query;

    console.log(params);
    // return response.send('<h1>Hello World</h1>');        
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcelo Oliveira'
    });
});

routes.get('/user/:id', (request, response) => {
    const params = request.params;
    const query = request.query;
    console.log(params);
    console.log(query);
    // return response.send('<h1>Hello World</h1>');        
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcelo de Oliveirasss'
    });
});

routes.post('/usuario', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'MARCELO OLIVEIRA'
    });
});


module.exports = routes;