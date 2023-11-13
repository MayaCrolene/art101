// index.js - Lab 9 - Libraries & jQuery
// Author: Maya Crolene
// Date: November 12, 2023

// "Challange" button first in first div
$(".section1").append("<button id='button-challenge'>Challange</button>");

$("#button-challenge").click(function(){
  $(".section1").css("background-color", "red");
  console.log("Don't click me!!");
});

// Click listener for Challenge
$("#button-problems").click(function(){
  $(".section1").toggleClass("special");
});

$("#button-challenge").mouseleave(function(){
  $(".section1").css("background-color", "white");
});

// "Problems" button second in middle div
$(".section2").append("<button id='button-problems'>Problems</button>");

$("#button-problems").click(function(){
  $(".section2").css("background-color", "orange");
  console.log("Didn't you see what the first button said!!");
});

// Click listener for Problems
$("button-problems").click(function(){
  $(".section2").toggleClass("special");
});

$("#button-problems").mouseleave(function(){
  $(".section2").css("background-color", "white");
});

// "Results" button last in final div
$(".section3").append("<button id='button-results'>Results</button>");

$("#button-results").click(function(){
  $(".section3").css("background-color", "yellow");
  console.log("Leave us aloneee!!");
});

// Click listener for Results
$("button-results").click(function(){
  $(".section3").toggleClass("special");
});

$("#button-results").mouseleave(function(){
  $(".section3").css("background-color", "white");
});