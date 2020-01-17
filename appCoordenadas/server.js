const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const Coordenada = require('./api/modelo/coordenadasModelo')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.2/dbGeografia', 
{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json())

const route = require('./api/rutas/coordenadasRutas')
route(app)
const port = process.env.PORT || 7000

const server = app.listen(port, () => {
    const host = server.address().address
    console.log(`Servidor abierto en http://${host}:${port}`)
})