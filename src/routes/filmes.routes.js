const express = require('express');
const router = express.Router();


// RECUPERAR TODOS OS REGISTROS
router.get('/', (req, res) => {
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

//PEGAR SOMENTE O REGISTRO COM ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM ID: ${id}`});
});

//CRIAR UM REGISTRO
router.post('/', (req, res) => {
    const body = req.body;
    res.json(body);    
});

//ATUALIZAR SOMENTE O REGISTRO COM ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}` });
});

//PEGAR SOMENTE O REGISTRO COM ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM ID: ${id}`});
});

module.exports = router;