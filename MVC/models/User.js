var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    pseudo: {type: String, required: true},
    email: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

exports.model = mongoose.model('User', schema);