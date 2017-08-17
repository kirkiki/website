var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema; // Nous créons un schéma mongoose


var schema = new Schema({
    title: {type: String, required: true},
    year: {type: String, required: true},
    real: {type: String, required: true},
		comment: {type: String, required: true},
		img: {type: String, required: false}
});

module.exports = mongoose.model('Movies', schema, 'movies'); 
