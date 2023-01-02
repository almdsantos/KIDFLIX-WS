const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const routes = require('./src/routes/filmes.routes');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/kidflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

app.listen(3000, () => {
    console.log('Meu Servidor Está Funcionando');
});



