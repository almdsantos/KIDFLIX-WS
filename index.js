const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

// RECUPERAR TODOS OS REGISTROS
app.get('/', (req, res) => {
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

//PEGAR SOMENTE O REGISTRO COM ID
app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM ID: ${id}`});
});

//CRIAR UM REGISTRO
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body);    
});

//ATUALIZAR SOMENTE O REGISTRO COM ID
app.put('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}` });
});

//PEGAR SOMENTE O REGISTRO COM ID
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM ID: ${id}`});

})

app.listen(3000, () => {
    console.log('Meu Servidor Está Funcionando');
});



