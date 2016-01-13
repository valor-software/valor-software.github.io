'use strict';
var express = require('express');
var app = express();
require('./config')(app);
require('./routes')(app);
app.listen(4343, function () {
  console.log('server start on port 4343 good');
});
