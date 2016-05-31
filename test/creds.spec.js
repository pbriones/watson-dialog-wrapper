'use strict';
var expect = require('chai').expect;
var creds = require('../lib/creds');

describe('creds', function(){
  it('.getCredentials(service:object, version:string)', function(){
    var service = {
      username: 'username',
      password: 'password'
    }
    var credentials = creds.getCredentials(service);
    var versionedCredentials = creds.getCredentials(service, 'v3')
    expect(credentials).to.be.an('object');
    expect(credentials).to.have.keys('username', 'password', 'version');
    expect(versionedCredentials).to.have.property('version', 'v3');
    
  })
})