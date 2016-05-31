'use strict';
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

var Creds = {
  getCredentials: function (service, version) {
    var creds = {
      version: 'v1'
    }
    if (typeof service === 'string') {
      var serviceCreds = appEnv.getServiceCreds(service);
      creds.username = serviceCreds.username,
        creds.password = serviceCreds.password
    }
    if (typeof service == 'object') {
      if (service.hasOwnProperty('username')
        && service.hasOwnProperty('password')) {
        creds.username = service.username;
        creds.password = service.username;
        if (service.hasOwnProperty('version')) {
          creds.version = service.version;
        }
      }
    }
    if (version) {
      creds.version = version;
    }
    return creds;
  }
}
module.exports = Creds;