const Flight = require('../models/flight');

function showAllFlights(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}
function addFlights(req, res) {
    res.render('flights/new')
}

function show(req, res) {
    console.log('whatever');
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
        res.redirect('/flights');
    });
}

module.exports = {
    new: addFlights,
    create: createFlight,
    index: showAllFlights,
    show: show,
}