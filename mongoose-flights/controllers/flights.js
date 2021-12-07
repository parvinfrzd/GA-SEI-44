const Flight = require('../models/flight');

function showAllFlights(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}
function addFlights(req, res) {
    res.render('flights/new', { title: 'Add New Flight' })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}

function createFlight(req, res, next) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;

    // for (let key in req.body) {
    //     if (req.body[key] === '') delete req.body[key];
    // }


    const flight = new Flight(req.body);
    console.log(flight);
    flight.save(function (error) {
        // if (error) {
        //     res.render('error', error);
        //     next();
        // }
        // console.log(flight);
        res.redirect('/flights');
    });

}

module.exports = {
    new: addFlights,
    create: createFlight,
    index: showAllFlights,
    show: show,
}