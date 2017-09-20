// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

var reservations = [{
  name: "",
  phoneNumber: "",
  uniqueId: "",
}];

var waitinglist = [{
  name: "",
  phoneNumber: "",
  uniqueId: "",
}];

//Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
  res.json(reservations);
});

// Search existing reservations
app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;
  if (chosen) {
  	console.log(chosen);
  	for (var i = 0; i < reservations.length; i++) {
  	  if (chosen === reservations[i].routeName) {
  	  	return res.json(reservations[i]);
  	  }
  	}
  	return res.json(false);
  }
  return res.json(reservations);
});

// Create new reservation
app.post("/api/new", function(req, res) {
  var newreservation = req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  console.log(newreservation);
  reservations.push(newreservation);
  res.json(newreservation);
});

// Clears all reservations
app.post("/api/new", function(req, res) {
  console.log(reservations);
  res.json
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});