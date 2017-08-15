var express = require('express');
var router = express.Router();

var movies = require('../controllers/Movies'); 

router.get('/', movies.index);

router.post('/', movies.create);

router.put('/:id(\\d+)', movies.update); 

module.exports = router;
