const Request = require("../models/request");
const createPath = require('../helpers/create-path');

const getRequests = (req, res) => {
    const title = 'Requests';
    Request
        .find()
        .then((requests) => res.render(createPath('requests'), { requests, title }))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        });
}

module.exports = { getRequests };