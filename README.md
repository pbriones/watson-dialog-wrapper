# watson-dialog-wrapper

Needed to use bluemix watson but didn't want to setup dialog service all the time with cfenv.

Installation
-----------

```
npm install watson-dialog-wrapper --save
```

Usage
-----------
For Bluemix:
```
var Dialog = require('watson-dialog-wrapper');
var dialog = new Dialog('my-bluemix-dialog-service-name');

The rest of functionalities are directly from IBM Watson Dialog Service
```
For hardcoded Credentials:

```
var Dialog = require('watson-dialog-wrapper');
var dialog = new Dialog({
  username: <username>,
  password: <password>,
  <other dialog params>: <param value>
});

The rest of functionalities are directly from IBM Watson Dialog Service
```