$(document).ready(function() {
  
  //Floating action button
  $("#reservation-button").on("mouseover", function() {
    $("#reservation-button").children("a").removeClass("pulse");
  });

  //Trigger modal
  $(".modal").modal();
  
});