const { io } = require('../server');

// console.log(io);

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        message: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado!');
    });
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback('Todo salio mal!!!!!')
        // }

    });

});