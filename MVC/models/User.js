var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
	nom: {type: String, required: true},
	prenom: {type: String, required: true},
    pseudo: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

exports.model = mongoose.model('User', schema);