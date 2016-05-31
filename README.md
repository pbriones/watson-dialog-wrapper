# watson-dialog-wrapper

Needed to use bluemix watson but didn't want to setup dialog service all the time with cfenv.

Installation
-----------

```
npm install watson-dialog-wrapper --save-dev
```

Usage
-----------
```
var Dialog = require('watson-dialog-wrapper');
var dialog = new Dialog('my-bluemix-dialog-service-name');

The rest of functionalities are directly from IBM Watson Dialog Service
```
TODO
-----------
* Get Dialog by name instead of ID



