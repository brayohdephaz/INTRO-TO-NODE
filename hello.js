//console.log("Hello world!");

// var url = require('url');

// http.createServer(function (req, res){
// 	res.writeHead(200,{'content-type': 'text/html'});
// 	var q = url.parse(req.url, true).query;
// 	var dates = q.year + " " + q.month;
// 	res.end(dates);
// }).listen(8080);


//CALLING THE FILE SYSTEM MODULE
var http = require('http');
 var fs = require('fs');
 var url = require('url');
 const PORT = process.env.PORT || 5000;


 http.createServer(function (req, res){
 	var q = url.parse(req.url , true);
 	var filename = "." + q.pathname;//Helps run and navigate over files and pages
 	if(filename=='./'){
 		filename='./index';//helps display index file if no pah is passed
 	}
 	filename = filename + ".html";//remove the html extension on the filename
 	fs.readFile(filename, function(err, data){
 		if(err){
 			res.writeHead(404, {'content-type':'text/html'});//erro message incase file not found
 			return res.end("ERROR: 404 Found!");//returns block if error occurs.
 		}
 		res.writeHead(200, {'content-type':'text/html'});
 		res.write(data);
 		return res.end();
 	});
 }).listen(PORT);

 console.log("Server listening to port 8080....");


 //