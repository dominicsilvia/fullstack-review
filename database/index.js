const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher')
.then(()=> {
  console.log('mongoose is connected');
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  name: String,
  full_name: String,
  forks_count: Number,
  owner_id: Number,
  login: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;