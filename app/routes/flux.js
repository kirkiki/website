var express = require('express');
var router = express.Router();

var flux = require('../controllers/Flux');

router.get('/', flux.index);

router.post('/', flux.create);

router.put('/:id(\\d+)', flux.update);

module.exports = router;
