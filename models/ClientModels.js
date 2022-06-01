const mongoose  = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
});

const Client  = mongoose.model('Client', clientSchema , 'clients')

module.exports = Client;
