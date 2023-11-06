// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Maya Crolene
// Date: November 5, 2023

// Code from Console
function simpleMaths(x){
  var results = ( x * 5 == 35);
  return results;
}

// Test Function
console.log("Is 6 multiplied by 5= 35?", simpleMaths(6));
console.log("Is 7 multiplied by 5= 35?", simpleMaths(7));

array = [3, 1, 56, 17, 9, 43, 7, 420, 69, 333]
console.log("My Array", array);

var results = array.map (function(x){
    return x / 2;
})
// Should return: (10) [1.5, 0.5, 28, 8.5, 4.5, 21.5, 3.5, 210, 34.5, 166.5]
console.log ("Array divided by 2: ", results);
