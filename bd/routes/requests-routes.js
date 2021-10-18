const express = require('express');
const router = express.Router();
const {
    getRequests
} = require('../controllers/request-controller')


router.get('/requests', getRequests);

module.exports = router;