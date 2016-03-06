var middleware = {
	requiredAuthentication : function(req , res, next){
		console.log('Private Route Hit!');
		next();
	},
	logger: function(req, res , next){
		console.log('Method>>>>>>>' +req.method + '>>>>>>>>Data>>' + new Date().toString());
		next();
	}
	

};

module.exports = middleware;