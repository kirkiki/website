var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true}
});

module.exports = mongoose.model('Flux', schema, 'flux');
