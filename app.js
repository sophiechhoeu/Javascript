const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var path = require('path');
const url = require('url');
const util = require('util');
const querystring = require('querystring');
const server = http.createServer();

const view = require('./view');

const requestListener = (request, response) => {

  // console.log(`request.url is: ${request.url}`);
  // console.log(`url.parse url is: ${util.inspect(url.parse(request.url))}`);
  // console.log(`url.parse url is: ${url.parse(request.url).query}`);
  // console.log(`qs is: ${querystring.parse(url.parse(request.url).query)}`);

  // const path = request.url;
  if (request.url === '/') {

    fs.readFile("./view.js", "UTF-8", function(err, html) {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');

        response.end(view());
			// response.writeHead(200, {"Content-Type": "text/html"});
			// response.end(view(html));
		});
  } else if (request.url.match(/.css$/)) {

    var cssPath = path.join(__dirname, 'public', request.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css');

    // response.writeHead(200, {"Content-Type": "text/css"});

    fileStream.pipe(response);
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/html');

    // response.end('Hello World\n');
    // response.end(view());
  } else {
    response.writeHead(404,{});
    response.end('Unknown Route');
  }
};

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server - event emitter
// [] optional


server.on('request', requestListener);

// server.on('request', (req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  if (process.send) {
      process.send('online');
  }
});
