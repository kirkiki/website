var express = require('express');
var router = express.Router();

var admin = require('../controllers/Admin');

router.get('/', admin.index);
router.post('/', admin.login)

module.exports = router;
