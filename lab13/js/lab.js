/*
   //lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 13 - Loops

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: November 25, 2023
*/

for(var index=1; index<=200; index++) {
//If the number is a multiple of more than one 3, 5 or 7, it should combine.
   if (index % 3 === 0 && index % 7 === 0) {
      console.log ("FizzBoom!");
   }
   if (index % 3 === 0 && index % 5 === 0) {
     console.log ("FizzBuzz!");
   }
   if (index % 5 === 0 && index % 7 === 0) {
      console.log ("BuzzBoom!");
    }
   else if (index % 3 === 0) {
     console.log ("Fizz!");
   }
   
   else if (index % 5 === 0) {
     console.log ("Buzz!");
   }
   else if (index % 7 === 0) {
      console.log ("Boom!");
   }
   else {
     console.log(index);

 //Make it so the output of your program appears in your output div.

 //Then after you've run through all the numbers, output the str at the end to your output div using:
 
str = console.log;
     str += "Fizz!";
 $("#output").append("<h3>" + "Fizz!" + "</h3>");
     str += "Buzz!";
 $("#output").append("<h3>" + "Buzz!" + "</h3>");
     str += "Boom!";
 $("#output").append("<h3>" + "Boom!" + "</h3>");
     str += "FizzBoom!";
 $("#output").append("<h3>" + "FizzBoom!" + "</h3>");
     str += "FizzBuzz!";
 $("#output").append("<h3>" + "FizzBuzz!" + "</h3>");
     str += "BuzzBoom!";
 $("#output").append("<h3>" + "BuzzBoom!" + "</h3>");
   }
}

