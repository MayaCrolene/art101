
//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 15 - AJAX

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: December 1, 2023

//Try #1
// const ENDPOINT = "https://jservice.io/api/random";
// // attach an event listener
// $("#activate").click(function(){
//    //ajax that shit
//  $.ajax({
//    "url": ENDPOINT,
//    "dataType": "json",
//    "success": function(results){
//      console.log(results);
//       //in the callback:
//       //extract the results
//      randomFact = results.answer;
//       //add to output div
//      $("#output").append("<p>" + randomFact + "</p>");
//    },
//    "error": function(){
//      }
//    });
//  });





 const ENDPOINT = "https://jservice.io/api/random";
 // attach an event listener
 $("#activate").click(function(){
    //ajax that shit
  $.ajax({
    "url": ENDPOINT,
    "dataType": "json",
    "success": function(results){
      console.log(results);
       //in the callback:
       //extract the results
      randomFact = results[0].answer;
      randomAnswer = results[0].question;
       //add to output div
      $("#output").append("<p>" + randomFact + ": " + randomAnswer + "</p>");
    },
    "error": function(){
      }
    });
  });
 