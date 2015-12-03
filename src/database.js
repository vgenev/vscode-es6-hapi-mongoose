var Mongoose = require('mongoose');  
var Config = require('./config');

var db = Mongoose.connection;
Mongoose.connect('mongodb://' + Config.mongo.url + '/' + Config.mongo.database);  

db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;  
exports.db = db;  
