var Admin={
	index:function(req,res){
		res.render('admin/index', {title:'Admin page'})
	},
  login(req, res){
    console.log(req.ip);
    res.render('admin/boloss', {title:'YOU GOT PRANKED'})
  }
}
module.exports = Admin;
