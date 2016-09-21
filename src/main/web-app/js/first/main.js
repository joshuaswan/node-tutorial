/**
 * Created by joshua on 2016/9/21.
 */
var http = require("http");

http.createServer(function (request, response) {
    //Send the HTTP header
    //HTTP Status: 200 : ok
    //Content Type: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //Send the response body as "Hello Joshua"
    response.end('Hello Joshua\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://localhost:8081/');