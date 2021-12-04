const express = require('express');
const router = express.Router();
const FlightCtrl = require('../controllers/flights');

router.get('/new', FlightCtrl.new);
router.post('/', FlightCtrl.create);
module.exports = router;
