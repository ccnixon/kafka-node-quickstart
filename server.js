'use strict';
const Kafka = require('./producer.js')
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 8080 });

server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {
        console.log(request.payload)
        Kafka.send(request.payload)
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});