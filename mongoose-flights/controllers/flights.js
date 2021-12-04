const Flight = require('../models/flight');
function addFlights(req, res) {
    res.render('flights/new')
}

function createFlight(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    const flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights/new');
    });
}

module.exports = {
    new: addFlights,
    create: createFlight,
}