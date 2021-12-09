const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

function addToTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.tickets.push(req.body.ticketId);
        flight.save(function (err) {
            console.log(err);
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function create(req, res) {
    console.log('ticket created');
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    })
}

module.exports = {
    new: newTicket,
    create,
    addToTicket
};