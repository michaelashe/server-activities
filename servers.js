// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;

// Create a generic function to handle requests and responses
function positiveAff(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You are an amazing person!  Pat yourself on the back!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(positiveAff);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7500;

// Create a generic function to handle requests and responses
function negativeAff(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You have body odor.....cleanse yourself.  May I suggest Dove...");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(negativeAff);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



