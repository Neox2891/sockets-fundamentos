var socket = io();
console.log(socket);
socket.on('connect', function() {
    console.log('Conectado al sevidor');
});
socket.on('enviarMensaje', function(data) {
    console.log('Servidor: ', data);
});
// Escuchar un suceso
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
// Enviar infromacion
socket.emit('enviarMensaje', {
    usuario: 'Nestor Estrada',
    mensaje: 'hola mundo'
}, function(response) {
    console.log('Respuesta server: ', response);
});