const express = require('express');
const router = express.Router();
const FlightCtrl = require('../controllers/flights');

router.get('/', FlightCtrl.index);
router.get('/new', FlightCtrl.new);
router.get('/:id', FlightCtrl.show);
router.post('/', FlightCtrl.create);
module.exports = router;
