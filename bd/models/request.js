const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;