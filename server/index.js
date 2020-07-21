const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../database/index.js');
const { getReposByUsername } = require('../helpers/github.js');

let app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('request body', req.body.username);

  getReposByUsername(req.body.username, (resData) => {
    console.log('AXIOS RESPONSE', resData.data);
    mongoose.save(resData.data);
  });

  //post data to database

  res.sendStatus(200);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

