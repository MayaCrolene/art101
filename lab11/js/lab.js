/*
   //lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 10 - JavaScript for the Web

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: November 15, 2023
*/

// In-class Text
$("#submit").click(function(){
   //console.log("Button Clicked!");
   // var name = prompt("What is your name?");

   var name = $("#user-name").val()

   console.log("Prompt returned: " + name);

   newText = "Hello " + name + "!";
   $("#title").html(newText);
});


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
   // We have to convert our string to an array and back again to sort it
   return inputString.split('').sort().join('');
 };

// click listener for button
$("#submit").click(function(){
// get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});