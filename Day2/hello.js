var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-type' : 'text/plain'});
    response.end('Hello world in NodeJs\n');
}).listen(4000);
console.log('server running at http://127.0.0.1:4000/');