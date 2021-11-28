const express = require('express');
const router = express.Router();
const addflgtCtrl = require('../controllers/addflights');


//GET/flights/new
router.get('/new', addflgtCtrl.new);

module.exports = router;