var fs = require('fs');
var vault = require('./vault');

var configPath = './config.json'; // config.json should NOT be checked into version control.  a config.json.example has been checked in for convenience
var config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

var mongoCredsP = vault.connect(config.vaultURL, config.roleId, config.secretId)
  .then(function(token) { 
    var usernameP = vault.read('dashboard/mongodb-username');
    var passwordP = vault.read('dashboard/mongodb-password');
    return Promise.all([usernameP, passwordP]);
  })
  .catch(function(err) { console.error('config.js mongoCredsP Error: ' + err.message); });

var jwtSecretKey = mongoCredsP
  .then(function([username, password]) { 
    return vault.read('dashboard/jwtSecretKey');
  })
  .catch(function(err) { console.error('config.js jwtSecretKey Error: ' + err.message); });


module.exports = {
  mongoUrl: mongoCredsP
    .then(function([username, password]) { 
      var url =
      `mongodb://${username}:${password}@${config.mongoHost}/dashboard?authSource=admin`;
      return Promise.resolve(url);
    })
  .catch(function(err) { console.error('config.js mongoUrl error: ' + err.message); }),

  secretKey: jwtSecretKey
};
