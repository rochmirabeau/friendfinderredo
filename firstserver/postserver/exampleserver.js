
// Dependencies
var http = require("http");
var fs = require("fs")
var PORT = 8080;
var path = req.url;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });
 	switch(path) {

	case "/":
		fs.readfile(__dirname + "index.html", (err, data) => {if(err) throw err
	console.log(data))
	break

	case "thanks"
		fs.readFile(__dirname + "/thanks.html", (err, data) => {if(err) throw err
console.log(data))
	break

	}
  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);


    res.end(console.log(requestData));
  });

};

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
