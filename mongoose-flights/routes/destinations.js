const express = require('express');
const router = express.Router();
const DestinationCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', DestinationCtrl.create);

module.exports = router;