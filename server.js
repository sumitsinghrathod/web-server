var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 3000;



app.use(middleware.logger);

// app.get('/' , function(req , res){
// 	res.send('Hello Express');
// });

app.get('/about' ,middleware.requiredAuthentication , function(req , res){

res.send('This all about node js. Node js is very powerfull language. Please start learning node js');

});

app.use(express.static(__dirname +'/public'));
app.listen(PORT , function(){

	console.log("Express Server Started on port::::::" + PORT);
});