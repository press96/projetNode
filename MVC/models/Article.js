var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    titre: {type: String, required: true},
    pseudo: {type: String, required: true},
    typeDePoste: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    commentaire: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

exports.model = mongoose.model('Article', schema); 