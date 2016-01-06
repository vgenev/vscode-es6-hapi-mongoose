'use strict'; 

//import * as Hapi from 'hapi';
const Hapi = require('hapi');
const Database = require('./database').db;
const Handler = require('./lib/handles');

const server = new Hapi.Server(); 

server.connection({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
});


server.route({
    method: 'GET',
    path: '/',
    handler: Handler.rootHandler
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
