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
    Flight.findById(req.params.id)
        .populate('tickets').exec(function (err, flight) {
            console.log(flight);
            // Performer.find({}).where('_id').nin(movie.cast)
            Ticket.find({ _id: { $nin: flight.tickets } })
                .exec(function (err, ticket) {
                    console.log('Flight tickets are: ', flight.tickets);
                    res.render('flights/show', {
                        title: 'Flight Detail', flight, ticket
                    });
                });
        });
}

function createFlight(req, res, next) {
    req.body.nowShowing = !!req.body.nowShowing;
    const flight = new Flight(req.body);
    console.log(flight);
    flight.save(function (error) {
        res.redirect(`/flights/${flight._id}`);
    });
}

module.exports = {
    new: addFlights,
    create: createFlight,
    index: showAllFlights,
    show: show,
}