const express = require('express');
const router = express.Router();
const Filme = require('../models/filme')


// RECUPERAR TODOS OS REGISTROS
router.get('/', (req, res) => {
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

//PEGAR SOMENTE O REGISTRO COM ID
router.get('/:id',(req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM ID: ${id}`});
});

//CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try {
        const filme = req.body;
        const response = await new Filme(filme).save();
        res.json({error: false, filme: response}); 
    } catch (err) {
        res.json({error: true, message: err.message});
    }
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