

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


// an image to overlay
$overlay.append($image);

// add overlay
$("body").append($overlay);

//a caption


//1, capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
   // update overlay with img linked in the link
  $image.attr("src", imageLocation);
  
   $overlay.show();
  //1.1, show the overlay
 
});
                           

   
//3, when ovlay is clicked
$overlay.click(function(){
  // hide overlay
  $overlay.hide();
});



