let Flight = require('../models/flight');


function createDestination(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

module.exports = {
    create: createDestination,
};