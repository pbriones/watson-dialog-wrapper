'use strict';
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

var Creds = {
  getCredentials: function (service) {
    var creds = {
      version: 'v1'
    }
    var serviceCreds = {};
    if (typeof service === 'string') {
      serviceCreds = appEnv.getServiceCreds(service);

    }
    if (typeof service === 'object') {
      serviceCreds = service;
    }
    for (var i in serviceCreds) {
      creds[i] = serviceCreds[i];
    }
    return creds;
  }
}
module.exports = Creds;