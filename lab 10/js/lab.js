/*
   //lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 10 - JavaScript for the Web

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: November 15, 2023
*/
var count = 0;

function generateRandomText() {
    const text = "Hey girl! Yo whats up! Hey there I’m on the road I should probably stop and pick you guys something to drink or do something to drink I just don’t want you guys going out there I just don’t know if I can do it or if I should wait until tomorrow morning I just want you guys out here to get your food so you don’t need it I just want you know I don’t know how long it takes for you guys are there to be there and you guys to be here and I know you’re not! ";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    if (count % 2 == 0) {
        var direction = "right";
    } else {
        var direction = "left";
    }
    $("#output").append('<div class="' + direction + ' text"><p>' + newText + '</p></div>');
    // update count
    count = count + 1;
});
