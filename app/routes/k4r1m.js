var express = require('express');
var router = express.Router();

var k4r1m = require('../controllers/K4r1m')
/* GET home page. */
router.get('/', k4r1m.index);

router.get('/:id', k4r1m.getId);

module.exports = router;