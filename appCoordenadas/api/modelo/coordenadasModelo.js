const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordenadaSchema = new Schema ({
    ciudad : {
        type: String,
        required : true
    },
    pais : {
        type: String,
        required: true
    },
    zonaHoraria : {
        type: String,
        required: true
    },
    latitud : {
        type: Number,
        min: -90,
        max: 90,
        default: 0
    },
    longitud : {
        type: Number,
        min: -180,
        max: 180
    }
}, {versionKey : false})

module.exports = mongoose.model('Coordenadas', coordenadaSchema)