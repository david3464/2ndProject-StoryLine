var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, '../Files')});
});

module.exports = router;
