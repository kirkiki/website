var express = require('express');
var router = express.Router();

var nez = require('../controllers/Nez');

router.get('/', nez.index);
module.exports = router;
