const mongoose = require('mongoose')
const Coordenada = mongoose.model('Coordenadas')

exports.listarTodo = (req, res) => {
    Coordenada.find({}, (err, coordenadas) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(coordenadas)
    })
}

exports.crearCoordenada = (req, res) => {
    const nuevaCoordenada = new Coordenada(req.body)
    nuevaCoordenada.save((err, coordenada) => {
        if(err){
            res.status(500).json(err)
        }
        res.status(201).json(coordenada)
    })
}

exports.buscarCoordenada = (req, res) => {
    Coordenada.findById(req.params.coordenadaId, (err, coordenada) => {
        if (err){
            res.send(err)
        }
        res.json(coordenada)
    })
}

exports.borrarCoordenada = (req, res) => {
    Coordenada.deleteOne({_id: req.params.coordenadaId}, (err, coordenada) => {
        if (err)
            res.send(err)
        res.json({ message: 'Task successfully deleted' })
    })
}

exports.actualizarCoordenada = (req, res) => {
    Coordenada.findOneAndUpdate({_id: req.params.coordenadaId}, req.body, {new: true}, (err, coordenada) => {
        if (err)
            res.send(err);
        res.json(coordenada);
    })
}
