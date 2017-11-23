var http = require("http");
var fs = require('fs')
var url = require('url');
var port = 8082

http.createServer(function(request,response){
var pathName = url.parse(request.url).pathname;
console.log('request under process...');
console.log(pathName)

response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");


fs.readFile('user.json',function(err,data){
 if(err)
 {
   console.log(err)
   response.writeHead(404,{'Content-Type' : 'text/plain'});
 }
 else {
   var id = pathName.substr(1);
   response.writeHead(200,{'Content-Type' : 'text/plain'})
   var users = data.toString();
   var user = eval(users).find(function(obj){return obj.id == id})

   response.write(JSON.stringify(user));
 }
 response.end();
})


}).listen(port);

console.log("server is running at http://127.0.0.1:"+port+"/");
