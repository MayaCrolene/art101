// index.js - In-class Experiments
// Author: Maya Crolene
// Date: 11/15/23


console.log("JavaScript is working!");

//Attach event listener to button
$("#my-button").click(function(){
    console.log("Button Clicked!");
    var name = prompt("name please:");
    console.log("Prompt returned: " + name);
    $("#title").html('Hello ' + name + '!');
});
