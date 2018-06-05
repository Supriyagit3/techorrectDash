var vault_func = require('node-vault');

module.exports = {
  vault: null, 
  connect: function (vaultURL, roleId, secretId) {
    var vault_options = {
      apiVersion: 'v1', // default
      endpoint: vaultURL
    }; 
    vault = vault_func(vault_options);

    return vault.approleLogin({ role_id: roleId, secret_id: secretId })
      .then(function(result) {
        // console.log('auth token: ' + result.auth.client_token);
        var token = result.auth.client_token;
        vault_options.token = token;
        // console.log(vault_options);
        vault = vault_func(vault_options);
        return Promise.resolve(token); })
      .catch(function(err) { console.error(err.message); });
  },

  read: function(key) {
    return vault.read(key)
      .then(function(result) { 
        var value = result.data.value;
        // console.log('key: ' + key + ", value: " + value);
        return Promise.resolve(result.data.value); 
      });
  }
}
