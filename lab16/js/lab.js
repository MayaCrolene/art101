
//lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   // index.js - Lab 16: JSON and APIs

   //Requirements: jQuery must be loaded for this script to work.

   //Author: Maya Crolene
   //Date: December 6, 2023



//Based of what we worked on in class
console.log ("JS Loaded");


const ENDPOINT = "https://xkcd.com/info.0.json";

// add button event listener
$("#button").click(function(){
  console.log("Click");
  
	// construct ajax object
	const comicObj = {
	  url: ENDPOINT,
	  type: "GET",
	  dataType: "json",
    success: ajaxSuccess,
    error: ajaxError,
	}
    $.ajax(comicObj);
})

function ajaxSuccess(comicObj){
	  console.log("Here's what I got:", comicObj);
  const title = comicObj.title;
  const alt = comicObj.alt;
  const img = comicObj.img;
// jQuery is my boyfrined
  $("#output").append("<h2>" + comicObj.title + "</h2>");
  $("#output").append("<img src='" + comicObj.img + "'/>");
  $("#output").append("<p>" + comicObj.alt + "</p>");
}
function ajaxError(request,error){
	  console.log("Oops:", request, error);
}


//Coment here later
