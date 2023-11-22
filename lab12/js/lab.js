/*
   //lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 12 - Conditionals

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: November 21, 2023
*/


//Start of Task 2: Harry Potter Code
function sortingHat(str) {
      len = str.length;
      mod = len % 4;
      if (mod == 0){
         return "Gryffindor 🦉"
      }
      else if (mod == 1){
         return "Ravenclaw 🐦‍⬛"
      }
      else if (mod == 2){
         return "Slytherin 🐍"
      }
      else if (mod == 3){
         return "Hufflepuff 🦡"
      }
}

//Now to make text appear
var myButton = document.getElementById("button");
myButton.addEventListener ("click", function() {
   var name = document.getElementById ("input").value;
   var house = sortingHat(name);
   newText = "<h1> The Sorting Hat has sorted you into " + house + "!<h1>";
   document.getElementById("output").innerHTML = newText;
})
