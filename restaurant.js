// Dependencies http and Express
var http = require("http");

var app = require("express");
// port
var PORT = 7000;
// handle request 
function handleRequest(request, response) {
    response.end("Fun over!");
}

// create our server 
var server = http.createServer(handleRequest);


// creating a listener 
server.listen(PORT, function() {
    console.log("Server is listening on PORT: ", PORT);
});

var reservation = [{
    "customerName" : "Georgie",
    "phoneNumber" : "(413)123-4321",
    "customerEmail" : "gnenov89@space.com",
    "customerID" : "ppl"

}];

var waitlist = [{
    "cusomerName" : "Barbara Straysland",
    "phoneNumber" : "123-123-1221",
    "cusomerEmail": "123@hotmail.com",
    
    
}]


