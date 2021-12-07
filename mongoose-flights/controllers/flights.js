const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function showAllFlights(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}
function addFlights(req, res) {
    res.render('flights/new', { title: 'Add New Flight' })
}

function show(req, res) {
    Flight.findById(req.params.id).populate('ticket').exec(function (err, flight) {
        Ticket.find(
            { _id: { $nin: flight.tickets } },
            function (err, tickets) {
                console.log(tickets);
                res.render('flights/show', {
                    title: 'Ticket Information', flight, tickets
                });
            }
        );
    });
}

function createFlight(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;

    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }


    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`);
    });
}

module.exports = {
    new: addFlights,
    create: createFlight,
    index: showAllFlights,
    show: show,
}