'use strict';
var watson = require('watson-developer-cloud');
var creds = require('service-credentials');
function Dialog(service, version) {
  var credentials = creds.getCredentials(service, version);
  this._dialog = watson.dialog(credentials);
}
Dialog.prototype.getDialogs = function (input, cb) {
  this._dialog.getDialogs(input, function (err, dialogs) {
    if (err) return cb(err);
    cb(null, dialogs);
  })
}

Dialog.prototype.createDialog = function (params, cb) {
  this._dialog.getDialogs(params, function (err, dialog) {
    if (err) return cb(err);
    cb(null, dialog);
  })
}

Dialog.prototype.deleteDialog = function (params, cb) {
  this._dialog.deleteDialog(params, function (err, dialog) {
    if (err) return cb(err);
    cb(null, dialog);
  })
}
Dialog.prototype.updateDialog = function (params, cb) {
  this._dialog.updateDialog(params, function (err, dialog) {
    if (err) return cb(err);
    cb(null, dialog);
  })
}

Dialog.prototype.conversation = function (params, cb) {
  this._dialog.conversation(params, function (err, conversation) {
    if (err) return cb(err);
    cb(null, conversation);
  })
}

Dialog.prototype.getConversation = function (params, cb) {
  this._dialog.getConversation(params, function (err, session) {
    if (err) return cb(err);
    cb(null, session);
  })
}

Dialog.prototype.getProfile = function (params, cb) {
  this._dialog.getProfile(params, function (err, profile) {
    if (err) return cb(err);
    cb(null, profile);
  })
}

Dialog.prototype.getDialog = function (name, cb) {
  this._dialog.getDialogs({}, function (err, dialogs) {
    if (err) return cb(err);
    function checkDialog(dialog){
      return name === dialog.name;
    }
    var dialog = dialogs.dialogs.find(checkDialog) || null;
    cb(null, dialog);
  })
}
module.exports = Dialog;