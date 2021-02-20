
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '51.222.37.131');
console.log('Server running at http://51.222.37.131:8080/');