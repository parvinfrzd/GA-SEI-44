const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'SouthWest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 0,
        max: 9999,
    },
    departs: {
        type: Date,
        default: Date(),
    },
});

//export the shcema: 
module.exports = mongoose.model('Flights', flightSchema);