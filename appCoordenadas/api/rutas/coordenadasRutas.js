module.exports = (app) => {

    const coordenadasControlador = require('../controlador/coordenadasControlador')
    app.route('/api')
    .get(coordenadasControlador.listarTodo)
    .post(coordenadasControlador.crearCoordenada)

    app.route('/api/:coordenadaId')
    .get(coordenadasControlador.buscarCoordenada)
    .delete(coordenadasControlador.borrarCoordenada)
    .put(coordenadasControlador.actualizarCoordenada)

}