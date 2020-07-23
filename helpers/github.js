const axios = require('axios');
const { TOKEN } = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let apiToken = process.env.TOKEN;

  if (apiToken == null || apiToken == "") {
    apiToken = TOKEN;
  }

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'rtp22-fullstack-review',
      'Authorization': `token ${apiToken}`
    }
  };

  axios(options)
  .then((data) => {
    cb(data);
  })
  .catch((error) => {
   console.log('AXIOS ERROR', error);
  })

}

module.exports.getReposByUsername = getReposByUsername;