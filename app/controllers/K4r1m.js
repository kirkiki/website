var mongoose = require('mongoose'),
    Karim = require('../models/K4r1m.js');
    
var K4r1m={
	index:function(req,res){
        Karim.find({}, function(err, crossed_all){
            if (err) throw err;
            console.log(crossed_all)
            res.render('k4r1m/index', {
                title:'���������',
                crosseds: crossed_all
            });
        });
    },
    getId: function(req, res){
        Karim.find({'id': 1}, function(err, crossed_id){
            if (err) throw err;
            console.log("id: " +  crossed_id);
			res.render('k4r1m/crossed',{
				title: '���������/'+ req.params.id,
				crossed: crossed_id
			});
		});
    }
}
module.exports = K4r1m;