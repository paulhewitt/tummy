const http = require('http');

const port = 1337;
const hostname = '127.0.0.1';

const server = http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(port, hostname);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
