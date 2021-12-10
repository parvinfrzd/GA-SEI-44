var express = require('express');
var router = express.Router();
const request = require('request');

const rootURL = 'https://api.chucknorris.io/';

/* GET home page. */
router.get('/', function (req, res, next) {
  // grab the username from the url query params
  // localhost:3000?username="joe"
  const username = req.query.username;

  // take the username variable and build an OUTGOING request
  const options = {
    url: `${rootURL}jokes/random`,

  };

  // use a package, to send a manual request to the internet ( request npm package)
  request(options, function (err, response, body) {
    // data from a request to an API comes through as a special string (JSON)
    // we need to convert that to JS
    const userData = JSON.parse(body);

    // reusing the same object but changing the url that we ask github for information from
    // options.value = userData.value;

    // do a follow up request for the repos data
    request(options, function (err, resp, body) {
      // re-use the old variable and just add a new key (array of all the repos that we got on the second request)
      userData.value = JSON.parse(body);
      console.log(userData)
      res.render('index', { userData });
    });
  });
});

module.exports = router;

//jokes/random