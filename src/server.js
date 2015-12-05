'use strict'; 

//import * as Hapi from 'hapi';
const Hapi = require('hapi');
const Database = require('./database').db;

const server = new Hapi.Server(); 

server.connection({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
});


server.route({
    method: 'GET',
    path: '/',
    handler: ( (request, reply) => {
        reply('Hello, world!');
    })
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
