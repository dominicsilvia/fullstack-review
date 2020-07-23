const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config.js');

let connectionURI = process.env.MONGODB_URI;

if (connectionURI == null || connectionURI == "") {
  connectionURI = MONGODB_URI;
}

mongoose.connect(connectionURI)
  .then(() => {
    console.log('mongoose is connected');
  })

const repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  name: String,
  full_name: String,
  forks_count: Number,
  owner_id: Number,
  login: String,
  html_url: String
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (arr, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repoArray = cleanGitArry(arr);
  Repo.insertMany(repoArray, { ordered: false })
    .then((inserted) => {
      callback(null, inserted);
    })
    .catch((failed) => {
      callback(failed, null);
    })

}

const cleanGitArry = (repoArray) => {
  let repoDetailsArray = [];

  for (let i = 0; i < repoArray.length; i++) {
    repoDetailsArray.push({
      '_id': repoArray[i].id,
      'name': repoArray[i].name,
      'full_name': repoArray[i].full_name,
      'forks_count': repoArray[i].forks_count,
      'owner_id': repoArray[i].owner.id,
      'login': repoArray[i].owner.login,
      'html_url': repoArray[i].html_url
    });
  }

  return repoDetailsArray;
}

const queryRepos = (callback) => {

  const query = Repo.find();

  query.sort({ 'forks_count': -1 }).limit(25).exec()
    .then((data) => callback(data))

}

module.exports.save = save;
module.exports.queryRepos = queryRepos;