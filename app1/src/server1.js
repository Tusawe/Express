const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//middleware
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    const usuario = {name : name}
    res.json(usuario)
})

app.post('/user/', (req, res) => {
    const name = req.body.name
    const usuario = {name : name}
    res.status(201).json(usuario)
})

const port = process.env.PORT || 8081
const server = app.listen(port, () => {
    const host = server.address().address
    // const port = server.address().port
    console.log(`server listen http://${host}:${port}`)
})