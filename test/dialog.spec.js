
'use strict';
var expect = require('chai').expect;
var Dialog = require('../lib/dialog');
var dialog = new Dialog({
  username: 'c2d4e7c8-5dfb-41fe-b617-da52e9ab8bd5',
  password: 'TKmv3QkOx8ek'
});
describe('dialog', function(){
  it('.getDialogs', function(){
    expect(dialog.getDialogs).to.be.a('function');
  })
  it('.createDialog', function(){
    expect(dialog.createDialog).to.be.a('function');
  })
  it('.deleteDialog', function(){
    expect(dialog.deleteDialog).to.be.a('function');
  })
  it('.updateDialog', function(){
    expect(dialog.updateDialog).to.be.a('function');
  })
  it('.conversation', function(){
    expect(dialog.conversation).to.be.a('function');
  })
  it('.getConversation', function(){
    expect(dialog.getConversation).to.be.a('function');
  })
  it('.getProfile', function(){
    expect(dialog.getProfile).to.be.a('function');
  })
})