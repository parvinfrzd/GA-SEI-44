const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    }

})
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
        default: 5,
    },
    departs: {
        type: Date,
        default: Date(),
    },
    destinations: [destinationSchema],
    tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }]
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Flights', flightSchema);