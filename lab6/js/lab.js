// index.js - Lab 6: Arrays and Objects
// Author: Maya Crolene
// Date: October 27, 2023

//Define Variables
var myTransport = ["'legs", "bus", "bike", "2017 Toyota Corolla recently bought"]

//Create an Object for My Main Ride
var myMainRide = {
make: "Tovota",
model: "Corolla",
color: "silver",
year: 2017,
age: function() {
  return 2023 - this.year;
  }
}

//Output
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


