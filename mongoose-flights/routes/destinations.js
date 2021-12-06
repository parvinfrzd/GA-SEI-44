var express = require('express');
var router = express.Router();
var DestinationCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', DestinationCtrl.create);

module.exports = router;