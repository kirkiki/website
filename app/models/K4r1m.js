var mongoose = require('mongoose'), // Nous appelons le module mongoose
    Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    content: {type: [String], required: true}
});

module.exports = mongoose.model('K4r1m', schema, 'k4r1m'); 