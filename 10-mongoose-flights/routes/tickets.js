const express = require('express');
const router = express.Router();
const TicketCtrl = require('../controllers/tickets');

router.get('/tickets/new', TicketCtrl.new);
router.post('/tickets', TicketCtrl.create);
router.post('/flights/:id/tickets', TicketCtrl.addToTicket);

module.exports = router;
