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


  getReposByUsername(req.body.username, (resData) => {
    //console.log('AXIOS RESPONSE', resData.data);
    mongoose.save(resData.data, (failures, successes) => {
      // console.log('insert successes', successes);
      // console.log('insert failures', failures);
      mongoose.queryRepos(results => res.send(results));
    });
  });

  //post data to database


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongoose.queryRepos((results) => {

    res.send(results);
  });
});

let port = process.env.PORT;

if(port == null || port =="") {
  port = 1128;
}

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

