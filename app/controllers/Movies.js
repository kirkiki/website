var mongoose = require('mongoose'),
	Movie = require('../models/Movies.js');

var Movies = {
	index: function(req,res){
		Movie.find({}, function(err, movies){
			if (err) throw err;
			console.log(movies);
			res.render('movies/index',{
				title: 'Films',
				movies: movies
			});
		});
	},
	create: function (req, res) { 

  },
  update: function (req, res) { 

  }
};
module.exports = Movies;
