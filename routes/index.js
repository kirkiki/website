var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nenozaure' });
});
router.get('/movies', function(req, res, next) {
  res.render('films', {title: 'My movies'});
});

module.exports = router;
