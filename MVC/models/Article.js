var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    pseudo: {type: String, required: true},
    date: {type: String, required: true},
    description: {type: String, required: true},
    createdOn: {type: Date, default: Date.now}
});

exports.model = mongoose.model('Article', schema);