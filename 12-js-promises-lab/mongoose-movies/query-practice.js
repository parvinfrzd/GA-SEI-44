require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');

/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(function () {
    console.log('HERE')
    // 1) Find all movie docs
    return Movie.find({});  // remember to return the promise!
}).then(function (result) {
    console.log('1): ', result)
    // 2) Find all performer docs
    return Performer.find({});
}).then(function (result) {
    console.log('2): ', result)

    // 3) Find all movies with an MPAA Rating of 'PG'
    return Movie.find({ mpaaRating: "PG" }).exec();
}).then(function (result) {
    console.log('3): ', result)

    // 4) Find all movies that are still showing
    return Movie.find({ nowShowing: true }).exec();
}).then(function (result) {
    console.log('4): ', result)

    // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'
    return Movie.where('mpaaRating').in(['PG-13', 'PG']);
}).then(function (result) {
    console.log('5): ', result)

    // 6) Find the first movie found with a releaseYear of 2018
    return Movie.findOne({ releaseYear: 2018 })
}).then(function (result) {
    console.log('6): ', result)

    // 7) Find all movies released after 1980
    return Movie.where('releaseYear').gt('1980');
}).then(function (result) {
    console.log('7): ', result)

    // 8) Find all movies whose titles start with a 'C'
    return Movie.find({ title: /^C/ });
}).then(function (result) {
    console.log('8): ', result)

    // 9) Find the performer named 'Rami Malek'
    return Performer.find({ name: 'Rami Malek' })
}).then(function (result) {
    console.log('9): ', result)

    // 10) Find all performers born before 1980
    return Performer.where('born').lt('1980')
    // Shouldn't we use Dates? In the 

}).then(function (result) {
    console.log('10): ', result)

    // 11) Find all performers whose name starts with a 'J'
    return Performer.find({ name: /^J/ });

}).then(function (result) {
    console.log('11): ', result)

})




    // 12) Add a reference to performer 'Bill Murray' to
    //     the movie Caddyshack's cast property and save.
    //     console.log the updated movie.


    .then(function () {
        process.exit();
    });







