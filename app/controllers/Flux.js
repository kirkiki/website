var mongoose = require('mongoose'),
        Articles = require('../models/Flux.js');

var Flux = {
        index: function(req,res){
                Articles.find({}, function(err, articles){
                        if (err) throw err;
                        console.log(articles);
                        res.render('flux/index',{
                                title: 'Flux',
                                articles: articles
                        });
                });
        },
        create: function (req, res) {

  },
  update: function (req, res) {

  }
};
module.exports = Flux;
