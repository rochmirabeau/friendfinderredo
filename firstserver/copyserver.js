
var http = require("http");
var fs = require("fs");
var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
		
 fs.readFile(__dirname + "/index.html", (err, data) => {
	if(err) throw err;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)

	})
  break;
  return;
//      return displayRoot(path, req, res);

    case "/music":
 fs.readFile(__dirname + "/music.html", (err, data) => {
	if(err) throw err;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)

	})
  break;
  return;

    case "/food":

 fs.readFile(__dirname + "/food.html", (err, data) => {
	if(err) throw err;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)

	})
  break;
  return;
    case "/movies":

 fs.readFile(__dirname + "/movies.html", (err, data) => {
	if(err) throw err;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)

	})
  break;
  return;
    default:
      return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  const myHTML = fs.readFile(__dirname + "/index.html", (err, data) => {
	if(err) throw err;
//	console.log(data)
	return data
	})

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });
console.log(myHTML.data)
console.log(__dirname)

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>My Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
