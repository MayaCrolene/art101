// index.js - Lab 7: Functions
// Author: Maya Crolene
// Date: November 1, 2023



//sortUserName - a function that will help a user sort letters of their name
function sortUserName(){
  var userName = window.prompt ("Hello there! Please tell me your name and I'll give you a special new one!");
  console.log("userName =", userName);
//split string to array
  var nameArray = userName.split ('');
  console.log("nameArray =", nameArray);
//sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
//join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

  //Output and Results
  document.writeln("Here is your much better new name: ", 
    sortUserName(), "</br>");
